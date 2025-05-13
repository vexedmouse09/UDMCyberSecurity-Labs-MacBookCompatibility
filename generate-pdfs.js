const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// List of guides to convert to PDFs
const guides = [
  { title: 'Kali Linux', path: '/docs/kali-linux.html' },
  { title: 'Metasploitable 2', path: '/docs/metasploitable.html' },
  { title: 'CyberOps Workstation', path: '/docs/cyberops.html' },
  { title: 'Homebrew Installation', path: '/docs/tools/homebrew.html' },
  { title: 'Lab Verification - Kali to Metasploitable', path: '/docs/lab-verifications/kali-metasploitable.html' }
  // Add other guides as needed
];

const baseUrl = 'https://vexedmouse09.github.io/UDMCyberSecurity-Labs-MacBookCompatibility';

async function generatePDFs() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  for (const guide of guides) {
    try {
      console.log(`Processing: ${guide.title}`);
      const page = await browser.newPage();
      
      // Set viewport to ensure full content is captured
      await page.setViewport({ width: 1200, height: 1800 });
      
      // Add custom CSS for PDF styling
      await page.addStyleTag({
        content: `
          @media print {
            .side-bar, .search, .site-footer, .breadcrumb-nav, .pdf-download-section {
              display: none !important;
            }
            
            .main-content {
              width: 100% !important;
              margin: 0 !important;
              padding: 20px !important;
            }
            
            img {
              max-width: 90% !important;
              page-break-inside: avoid;
            }
            
            h2, h3, h4 {
              page-break-after: avoid;
            }
            
            pre, blockquote, table {
              page-break-inside: avoid;
            }
          }
        `
      });
      
      // Navigate to the page
      await page.goto(`${baseUrl}${guide.path}`, { 
        waitUntil: 'networkidle0',
        timeout: 60000
      });
      
      // Wait for images to load
      await page.waitForSelector('img', { timeout: 5000 }).catch(() => 
        console.log(`No images found or timed out for ${guide.title}`)
      );
      
      // Give additional time for all resources to load
      await page.waitForTimeout(3000);
      
      // Create sanitized filename
      const filename = `${guide.title.replace(/[^a-z0-9]/gi, '-').toLowerCase()}.pdf`;
      
      // Generate PDF
      await page.pdf({
        path: path.join('pdfs', filename),
        format: 'A4',
        printBackground: true,
        margin: {
          top: '20mm',
          right: '20mm',
          bottom: '20mm',
          left: '20mm'
        },
        displayHeaderFooter: true,
        headerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%;">UDM Cybersecurity VM Guide</div>',
        footerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
      });
      
      console.log(`Generated PDF: ${filename}`);
      await page.close();
    } catch (error) {
      console.error(`Error processing ${guide.title}:`, error);
    }
  }
  
  await browser.close();
  console.log('PDF generation complete!');
}

generatePDFs().catch(error => {
  console.error('PDF generation failed:', error);
  process.exit(1);
});
