const { parse } = require("node-html-parser");
// const { readFileSync } = require("node:fs");
const { readFileSync, writeFileSync } = require("fs"); // Importa o módulo fs
const COLOR_FOLDER = "/colors";
// Read HTML file
const html = readFileSync(`${process.cwd()}/html/fundamentos.html`, {
  encoding: "utf8",
});
// Parse HTML file
const root = parse(html);
let colorId;
root.childNodes.forEach((el) => {
  if (el.rawTagName === "h3") {
    colorId = el.attributes ? el.attributes["id"] : null;
  }
  if (el.rawTagName === "table") {
    const tbody = el.querySelector("tbody");
    const trs = tbody.getElementsByTagName("tr");
    let data = {};
    trs.forEach((tr) => {
      const tds = tr.getElementsByTagName("td");
      const colorValue = tds[tds.length - 2].lastChild.rawText;
      const colorToken = tds[tds.length - 1].rawText.match(/\d+/)[0];
      data[colorToken] = colorValue;
    });
    const content = `module.exports = ${JSON.stringify(data, null, 2)};`;
    const fileName = `${process.cwd()}${COLOR_FOLDER}/${colorId}.js`;
    writeFileSync(fileName, content, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    console.log("File created", fileName);
  }
});
