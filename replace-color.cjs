const fs = require('fs');
const path = require('path');

function replaceColorInDir(dir, oldColor, newColor) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      replaceColorInDir(fullPath, oldColor, newColor);
    } else if (fullPath.endsWith('.jsx') || fullPath.endsWith('.css') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      const regex = new RegExp(oldColor, 'gi');
      if (regex.test(content)) {
        content = content.replace(regex, newColor);
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

replaceColorInDir(path.join(__dirname, 'src'), '#F5F0E7', '#C8A64E');
console.log('Revert done!');
