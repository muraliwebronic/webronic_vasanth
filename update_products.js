const fs = require('fs');
const path = require('path');

function processDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');

            // Specifically target relatedResources section
            const regex = /relatedResources:\s*\{([\s\S]*?)\]\s*\n\s*\},/g;

            let newContent = content.replace(regex, (match, inner) => {
                // Only replace href within the services array of relatedResources
                let newInner = inner.replace(/href:\s*['"]\/services\/([^'"]+)['"]/g, 'id: "$1"');
                return match.replace(inner, newInner);
            });

            if (content !== newContent) {
                fs.writeFileSync(fullPath, newContent);
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

processDir('src/AllData/products');

console.log('Update complete.');
