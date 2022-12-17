import child_process from "node:child_process";
import fs from "node:fs";
import path from "node:path";

import argparse from "argparse";
import express from "express";
import jsdom from "jsdom";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItBracketedSpans from "markdown-it-bracketed-spans";
import prettier from "prettier";

const argumentParser = new argparse.ArgumentParser({});
argumentParser.add_argument("-i", "--input", {
  required: true,
  help: "Input directory"
});
argumentParser.add_argument("-t", "--template", {
  help: "Template file (html)"
});
argumentParser.add_argument("-s", "--selector", {
  help: "Template file (html)",
  default: "body"
});
argumentParser.add_argument("-p", "--port", {
  help: "Port",
  default: 80
});

const options = argumentParser.parse_args();

const markdown = markdownIt({ html: true });
markdown.use(markdownItAttrs, {
  leftDelimiter: "{",
  rightDelimiter: "}",
  allowedAttributes: ["id", "class"],
});
markdown.use(markdownItBracketedSpans);

const app = express();

// Webhook for repository update
app.post("/api/refresh", (req, res) => {
  res.status(200).send("refresh");
  try {
    console.log("POST /api/refresh");
    child_process.execSync("git reset --hard HEAD");
    child_process.execSync("git pull");
    child_process.execSync("npm install");
    child_process.execSync("systemctl restart zen.docs");
    console.log("Repository refreshed");
  } catch (error) {
    console.error(error);
  }
});

app.get(/.*/, (req, res) => {
  let _path = req.path;

  let parsed;
  let file;

  // Exact match
  parsed = path.parse(_path);
  file = (options.input + parsed.dir + "/" + parsed.base).replaceAll("//", "/");
  if (fs.existsSync(file) && parsed.ext.toLowerCase() != ".md") {
    // Directory
    if (fs.statSync(file).isDirectory()) {
      // Append a trailing / to make sure links are pointing to the same folder
      if (!_path.endsWith("/")) {
        res.redirect(301, _path + "/");
        return;
      }
      // Add default filename /index
      _path = (parsed.dir + "/" + parsed.base + "/index").replaceAll("//", "/");
    } else {
      res.sendFile(path.resolve(file));
      return;
    }
  }

  // No extension (append .html)
  parsed = path.parse(_path);
  if (parsed.ext == "") {
    _path = _path + ".html";
    // Exact match
    parsed = path.parse(_path);
    file = (options.input + parsed.dir + "/" + parsed.base).replaceAll("//", "/");
    if (fs.existsSync(file)) {
      res.sendFile(path.resolve(file));
      return;
    }
  }

  // Markdown parser
  if (parsed.ext.toLowerCase() == ".html" || parsed.ext.toLowerCase() == ".md") {
    file = (options.input + parsed.dir + "/" + parsed.name + ".md").replaceAll("//", "/");
    if (fs.existsSync(file)) {
      // Template
      let template;
      if (options.template && fs.existsSync(options.template))
        template = fs.readFileSync(options.template).toString();

      const contentDom = new jsdom.JSDOM(markdown.render(fs.readFileSync(file).toString()));

      // const headers = contentDom.window.document.querySelectorAll("body>h1,body>h2,body>h3,body>h4,body>h5,body>h6");

      let dom;
      if (template) {
        dom = new jsdom.JSDOM(template);
        const node = dom.window.document.querySelector(options.selector);
        for (const children of contentDom.window.document.body.children)
          node.append(children.cloneNode(true));
      } else
        dom = contentDom;

      // Title (first h1 in markdown file)
      if (contentDom.window.document.body.children[0]?.tagName == "H1")
        dom.window.document.title = contentDom.window.document.body.children[0].textContent;

      res.header("Content-Type", "text/html; charset=utf-8");
      res.send(prettier.format(dom.serialize(), {
        parser: "html",
        printWidth: 1200
      }));
      // res.send(dom.serialize());
      return;
    }
  }

  res.status(404).send("Not Found");
  return;
});

app.listen(options.port, () => {
  console.log(`zen.docs listening on port ${options.port}`)
});
