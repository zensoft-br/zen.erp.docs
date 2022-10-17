import argparse from "argparse";
import express from "express";
import fs from "fs";
import jsdom from "jsdom";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import path from "path";
import prettier from "prettier"

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
// argumentParser.add_argument("-s", "--selector", {
//   help: "Template element selector"
// });
// argumentParser.add_argument("-v", "--verbose", {
//   help: "Verbose mode"
// });

const options = argumentParser.parse_args();

const markdown = markdownIt({ html: true });
markdown.use(markdownItAttrs, {
  leftDelimiter: "{",
  rightDelimiter: "}",
  allowedAttributes: ["id", "class"],
});

const app = express();

app.get(/.*/, (req, res) => {
  let parsed = path.parse(req.path);

  let file;

  // Exact match
  file = options.input + parsed.dir + "/" + parsed.base;
  if (fs.existsSync(file)) {
    res.sendFile(path.resolve(file));
    return;
  }

  // No extension (append .html)
  if (parsed.ext == "") {
    parsed = path.parse(req.path + ".html");
    // Exact match
    file = options.input + parsed.dir + "/" + parsed.base;
    if (fs.existsSync(file)) {
      res.sendFile(path.resolve(file));
      return;
    }
  }

  // Markdown parser
  if (parsed.ext.toLowerCase() == ".html") {
    file = options.input + parsed.dir + "/" + parsed.name + ".md";
    if (fs.existsSync(file)) {
      // Template
      let template;
      if (options.template && fs.existsSync(options.template))
        template = fs.readFileSync(options.template).toString();

      const contentDom = new jsdom.JSDOM(markdown.render(fs.readFileSync(file).toString()));

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

      res.send(prettier.format(dom.serialize(), { parser: "html" }));
      return;
    }
  }

  res.status(404).send("Not Found");
  return;
});

app.listen(options.port, () => {
  console.log(`Example app listening on port ${options.port}`)
});
