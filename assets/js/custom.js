// Dark/Light mode toggle and other site enhancements
document.addEventListener('DOMContentLoaded', function() {
  // Create and add dark/light mode toggle
  addThemeToggle();
  
  // Make step progress indicators clickable
  makeStepsClickable();
  
  // Add back to top button
  addBackToTopButton();
  
  // Fix numbered lists if needed
  fixOrderedLists();
});

// Add theme toggle element to the page
function addThemeToggle() {
  // Create theme toggle wrapper and button
  const themeToggle = document.createElement('div');
  themeToggle.className = 'theme-toggle-wrapper';
  themeToggle.innerHTML = `
    <span class="theme-icon">🌙</span>
    <label class="theme-toggle">
      <input type="checkbox" id="theme-switch">
      <span class="theme-toggle-slider"></span>
    </label>
    <span class="theme-icon">☀️</span>
  `;
  
  // Add the toggle to the page header
  const header = document.querySelector('.site-header') || document.querySelector('header');
  if (header) {
    header.appendChild(themeToggle);
  } else {
    document.body.insertBefore(themeToggle, document.body.firstChild);
  }
  
  // Set up the theme toggle functionality
  const themeSwitch = document.getElementById('theme-switch');
  
  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeSwitch.checked = true;
  }
  
  // Handle theme toggle changes
  themeSwitch.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  });
}

// Make step progress indicators actually clickable and scroll to the corresponding section
function makeStepsClickable() {
  const stepItems = document.querySelectorAll('.step-progress .step-item');
  stepItems.forEach(function(item) {
    if (!item) return;
    
    const stepNumber = item.querySelector('.step-marker');
    const stepTitle = item.querySelector('.step-title');
    
    if (!stepNumber || !stepTitle) return;
    
    const stepNum = parseInt(stepNumber.textContent);
    const title = stepTitle.textContent.trim();
    
    item.addEventListener('click', function() {
      // Find the corresponding heading
      const headings = Array.from(document.querySelectorAll('h2, h3'));
      
      // Try different matching strategies
      let targetHeading = null;
      
      // Strategy 1: Match by step title
      for (const heading of headings) {
        if (heading.textContent.includes(title)) {
          targetHeading = heading;
          break;
        }
      }
      
      // Strategy 2: Match by step number in the heading
      if (!targetHeading) {
        for (const heading of headings) {
          if (heading.textContent.includes(`Step ${stepNum}`) ||
              heading.textContent.includes(`${stepNum}.`) ||
              heading.textContent.includes(`${stepNum}:`)) {
            targetHeading = heading;
            break;
          }
        }
      }
      
      // If found, scroll to it
      if (targetHeading) {
        targetHeading.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Add back to top button
function addBackToTopButton() {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.innerHTML = '&uarr;';
  backToTopBtn.title = 'Back to top';
  document.body.appendChild(backToTopBtn);
  
  // Show/hide based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Fix ordered lists that are interrupted by other content
function fixOrderedLists() {
  // This uses a different approach - it identifies lists that have non-li elements between li elements
  const orderedLists = document.querySelectorAll('ol');
  
  orderedLists.forEach(function(list) {
    const listItems = list.querySelectorAll('li');
    let startValue = 1;
    
    // Check for directly set start attribute
    if (list.hasAttribute('start')) {
      startValue = parseInt(list.getAttribute('start'));
    }
    
    // Set correct value for each list item
    listItems.forEach(function(item, index) {
      item.setAttribute('value', startValue + index);
    });
  });
}
