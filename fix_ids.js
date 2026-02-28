const fs = require('fs');
const path = require('path');

const validKeys = [
    'web-development', 'ai-machine-learning', 'cloud-services',
    'digital-transformation', 'devops', 'iot-solutions', 'data-analytics',
    'consulting', 'application-services', 'infrastructure',
    'engineering', 'qa-testing', 'design', 'blockchain', 'mobile-development'
];

const mappings = {
    'app-development': 'application-services',
    'web': 'web-development',
    'cloud': 'cloud-services',
    'data': 'data-analytics',
    'analytics': 'data-analytics',
    'iot': 'iot-solutions',
    'mobile': 'mobile-development',
    'qa': 'qa-testing',
};

function checkFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find relatedResources section
    const regex = /relatedResources:\s*\{([\s\S]*?)\]\s*\n\s*\},/g;

    let modified = false;
    let newContent = content.replace(regex, (match, inner) => {
        // Inside relatedResources, replacing the id
        let newInner = inner.replace(/id:\s*['"]([^'"]+)['"]/g, (m, idVal) => {
            if (validKeys.includes(idVal)) return m; // unchanged

            let mapped = mappings[idVal] || idVal;

            if (!validKeys.includes(mapped)) {
                console.log(`WARNING: Unknown ID in ${filePath}: ${idVal} -> ${mapped}`);
            }

            if (mapped !== idVal) {
                modified = true;
            }
            return `id: "${mapped}"`;
        });
        return match.replace(inner, newInner);
    });

    if (modified) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Fixed ${filePath}`);
    }
}

function walk(dir) {
    for (let f of fs.readdirSync(dir)) {
        let p = path.join(dir, f);
        if (fs.statSync(p).isDirectory()) walk(p);
        else if (p.endsWith('_DATA.ts')) checkFile(p);
    }
}

walk('src/AllData/services');
console.log("Fixing completed.");
