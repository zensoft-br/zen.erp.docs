import fs from "fs";
import jsdom from "jsdom";
import markdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";

function walk(dir) {
  let results = [];
  let list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = dir + "/" + file;
    let stat = fs.statSync(file);
    if (stat && stat.isDirectory())
      results = results.concat(walk(file));
    else
      results.push(file);
  });
  return results;
}

const markdown = markdownIt({ html: true });
markdown.use(markdownItAttrs, {
  leftDelimiter: "{",
  rightDelimiter: "}",
  allowedAttributes: ["id", "class"],
});

const input = "src";

const files = walk(input).filter(file => file.toLowerCase().endsWith(".md"));

const result = [];

for (const file of files) {
  const contentDom = new jsdom.JSDOM(markdown.render(fs.readFileSync(file).toString()));

  result.push({
    path: file.substring(input.length + 1),
    title: contentDom.window.document.body.querySelector('h1')?.textContent || null,
    headers: [...contentDom.window.document.body.children].filter(e => e.tagName.match("H[1-6]")).map(e => e.textContent).join(" ").replace(/\s+/g, ' '),
    content: [...contentDom.window.document.body.children].filter(e => !e.tagName.match("H[1-6]")).map(e => e.textContent).join(" ").replace(/\s+/g, ' '),
  });
}

fs.writeFileSync(input + "/fts.json", JSON.stringify(result, null, 2));
