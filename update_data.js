const fs = require('fs');
const path = require('path');

function updateTypes(p) {
    if (fs.existsSync(p)) {
        let content = fs.readFileSync(p, 'utf8');
        content = content.replace(
            'services: { title: string; href: string; icon: string; color: string; bg: string }[];',
            'services: { title: string; id: string; icon: string; color: string; bg: string }[];'
        );
        fs.writeFileSync(p, content);
        console.log(`Updated ${p}`);
    }
}

updateTypes('src/AllData/services/types.ts');
updateTypes('src/AllData/services/types copy.ts');

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

processDir('src/AllData/services/mainData');
processDir('src/AllData/services/addedData');

console.log('Update complete.');
