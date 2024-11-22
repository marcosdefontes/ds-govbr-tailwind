const { parse } = require("node-html-parser");
const { readFileSync, writeFileSync } = require("fs");
const COLOR_FOLDER = "/colors";

const snakeToCamel = str =>
  str.toLowerCase().replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', '')
  );
// Read HTML file
const html = readFileSync(`${process.cwd()}/html/fundamentos.html`, {
  encoding: "utf8",
});
// Parse HTML file
const root = parse(html);
let colorId;
let colors = []
root.childNodes.forEach((el) => {
  if (el.rawTagName === "h3") {
    colorId = el.attributes ? el.attributes["id"] : null;
    colors[`${colorId}`] = []
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
      colors[`${colorId}`].push({ token: colorToken, value: colorValue })
    });
    const content = `module.exports = ${JSON.stringify(data, null, 2)};`;
    const fileName = `${process.cwd()}${COLOR_FOLDER}/${colorId}.js`;
    createOrUpdateColorFiles(fileName, content);
  }
});
createColorIndexFile(colors)
function createOrUpdateColorFiles(fileName, content) {
  writeFileSync(fileName, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
  console.log("File created", fileName);
}

function createColorIndexFile(colors) {
  let importLines = '';
  let exportLines = '';
  for (let [key, value] of Object.entries(colors)) {
    const colorVar = snakeToCamel(key);
    importLines += `const ${colorVar} = require("./colors/${key}");\n`
    exportLines += `\t"${key}" : {... ${colorVar} }, \n`
  }
  const moduleContent = `${importLines}\nmodule.exports = {\n${exportLines}};`
  writeFileSync(`${process.cwd()}/colors.js`, moduleContent)
  console.log("Index color file created.")
}



