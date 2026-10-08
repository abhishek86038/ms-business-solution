const cheerio = require('cheerio');
const fs = require('fs');

const pages = [
  { name: 'Home', path: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9c607c8-e1c5-4cbe-8c6a-39a00d1f7a5d/.system_generated/steps/6/content.md' },
  { name: 'About', path: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9c607c8-e1c5-4cbe-8c6a-39a00d1f7a5d/.system_generated/steps/21/content.md' },
  { name: 'Services', path: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9c607c8-e1c5-4cbe-8c6a-39a00d1f7a5d/.system_generated/steps/22/content.md' },
  { name: 'Contact', path: 'C:/Users/hp/.gemini/antigravity-ide/brain/e9c607c8-e1c5-4cbe-8c6a-39a00d1f7a5d/.system_generated/steps/23/content.md' }
];

pages.forEach(page => {
  if (fs.existsSync(page.path)) {
    const html = fs.readFileSync(page.path, 'utf8');
    const $ = cheerio.load(html);
    
    // Remove scripts and styles
    $('script, style, noscript').remove();
    
    // Print visible text
    console.log(`\n\n=== ${page.name} ===\n`);
    console.log($('body').text().replace(/\s+/g, ' ').trim());
  } else {
    console.log(`\n\n=== ${page.name} ===\nFile not found!`);
  }
});
