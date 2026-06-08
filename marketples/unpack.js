const fs = require('fs');
const zlib = require('zlib');

const html = fs.readFileSync('bundle.html', 'utf8');

const manifestStr = html.split('<script type="__bundler/manifest">')[1]?.split('</script>')[0];
if (!manifestStr) {
    console.error("No manifest found");
    process.exit(1);
}

const manifest = JSON.parse(manifestStr.trim());

if (!fs.existsSync('unpacked')) fs.mkdirSync('unpacked');

for (const uuid in manifest) {
    const entry = manifest[uuid];
    const buffer = Buffer.from(entry.data, 'base64');
    let content = buffer;
    if (entry.compressed) {
        content = zlib.gunzipSync(buffer);
    }
    
    let ext = 'txt';
    if (entry.mime.includes('javascript')) ext = 'js';
    if (entry.mime.includes('jsx')) ext = 'jsx';
    if (entry.mime.includes('css')) ext = 'css';
    
    fs.writeFileSync(`unpacked/${uuid}.${ext}`, content);
}

const templateStr = html.split('<script type="__bundler/template">')[1]?.split('</script>')[0];
if (templateStr) {
    let template = JSON.parse(templateStr.trim());
    fs.writeFileSync('unpacked/template.html', template);
}

console.log("Unpacked successfully.");
