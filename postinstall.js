const fs = require('fs-extra');

function fixGatsbyJssRemovingStylesInProductionWtf(){
  const problemFilePath = './node_modules/gatsby-plugin-jss/gatsby-browser.js';
  const problemFileContent = fs.readFileSync(problemFilePath,'utf8');
  fs.writeFileSync(problemFilePath,problemFileContent.replace(`    ssStyles.parentNode.removeChild(ssStyles);`,`    // ssStyles.parentNode.removeChild(ssStyles);`),'utf8');
}
fixGatsbyJssRemovingStylesInProductionWtf();
