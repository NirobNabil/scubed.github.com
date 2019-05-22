var fs = require('fs');

fs.open('./fonts.js', 'r+', function (err, fd) {});
var importString = "";
var fontfaceString = "let GlobalFonts = createGlobalStyle`";

function returnDir(dir) {
  files = fs.readdirSync(dir, {
    withFileTypes: true
  });
  files.forEach(function (file) {
    if (file.isFile()) {
      let importName = file.name.replace(/(%20|_|-| |\..*)/gm, '').toLowerCase().trim(); //importString = importString + ( "import " + importName + ' from "' + dir + file.name + '"; \n')

      importString = `${importString} import ${importName} from ${dir + file.name}; \n`; //fontfaceString = fontfaceString + "@font-face{ font-family: " + importName + "; " + "src: url( {" +  importName + "});" + "} \n";

      fontfaceString = `${fontfaceString} @font-face{ font-family: ${importName};  src: url( { ${importName} }); } \n"`;
    }

    if (file.isDirectory()) {
      returnDir(dir + file.name + '/');
    }
  });
}

returnDir('./assets/fonts/');
let toWrite = `
    import { createGlobalStyle } from 'styled-components';
    ${importString}

    let globalFonts = createGlobalStyle\`
    ${fontfaceString}
    \`

`;
console.log(importString);
console.log(fontfaceString); // fs.writeFile('fonts.txt', importString + fontfaceString,  function(err){
//     if(err){ throw err }
// })