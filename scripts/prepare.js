const fs = require('node:fs');
const path = require('node:path');
const src = path.join(__dirname, '..', 'node_modules', 'xlsx', 'dist', 'xlsx.full.min.js');
const destDir = path.join(__dirname, '..', 'app', 'vendor');
fs.mkdirSync(destDir, {recursive:true});
if (!fs.existsSync(src)) { console.error('Missing SheetJS library. Run npm install first.'); process.exit(1); }
fs.copyFileSync(src, path.join(destDir, 'xlsx.full.min.js'));
console.log('Excel support bundled for offline use.');
