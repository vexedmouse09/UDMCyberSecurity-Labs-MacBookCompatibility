// Collapsible sidebar

document.addEventListener('DOMContentLoaded', function() {
  // Create toggle button
  const sideBar = document.querySelector('.side-bar');
  const main = document.querySelector('.main');
  
  if (!sideBar) return;
  
  const toggleButton = document.createElement('button');
  toggleButton.classList.add('sidebar-toggle-button');
  toggleButton.setAttribute('aria-label', 'Toggle sidebar');
  toggleButton.innerHTML = '◀';
  
  sideBar.appendChild(toggleButton);
  
  // Function to toggle sidebar
  function toggleSidebar() {
    const isCollapsed = sideBar.classList.toggle('collapsed');
    main.classList.toggle('shifted');
    
    // Update button icon
    toggleButton.innerHTML = isCollapsed ? '▶' : '◀';
    
    // Save preference to localStorage
    localStorage.setItem('sidebar-collapsed', isCollapsed);
  }
  
  // Add click event
  toggleButton.addEventListener('click', toggleSidebar);
  
  // Check if sidebar was previously collapsed
  const wasCollapsed = localStorage.getItem('sidebar-collapsed') === 'true';
  if (wasCollapsed) {
    sideBar.classList.add('collapsed');
    main.classList.add('shifted');
    toggleButton.innerHTML = '▶';
  }
  
  // Add icons to navigation categories
  addIconsToNavigation();
  
  // Add code copy buttons
  addCodeCopyButtons();
  
  // Add breadcrumb navigation
  addBreadcrumbNavigation();
  
  // Add next/prev page navigation
  addPageNavigation();
});

// Function to add icons to navigation categories
function addIconsToNavigation() {
  const navCategories = {
    'Virtual Machines': '💻',
    'Tools & Utilities': '🔧',
    'Lab Exercises': '🔬',
    'Documentation': '📚'
  };
  
  // Find all nav list items with children
  const navItems = document.querySelectorAll('.nav-list-item');
  
  navItems.forEach(item => {
    const link = item.querySelector('.nav-list-link');
    if (!link) return;
    
    const text = link.textContent.trim();
    
    // Check if this is a category we want to add an icon to
    if (navCategories[text]) {
      // Wrap text in a span with flex display
      link.innerHTML = `<span class="nav-category-title">${navCategories[text]} ${text}</span>`;
    }
  });
}

// Function to add copy buttons to code blocks
function addCodeCopyButtons() {
  const codeBlocks = document.querySelectorAll('pre.highlight');
  
  codeBlocks.forEach(block => {
    // Get the language
    const codeElement = block.querySelector('code');
    if (!codeElement) return;
    
    const classes = codeElement.className.split(' ');
    let lang = '';
    
    for (const className of classes) {
      if (className.startsWith('language-')) {
        lang = className.replace('language-', '');
        break;
      }
    }
    
    // Set data attribute for language display
    if (lang) {
      block.setAttribute('data-lang', lang);
    }
    
    // Create copy button
    const button = document.createElement('button');
    button.classList.add('copy-button');
    button.textContent = 'Copy';
    
    // Copy functionality
    button.addEventListener('click', () => {
      const code = codeElement.textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
    
    block.appendChild(button);
  });
}

// Function to add breadcrumb navigation
function addBreadcrumbNavigation() {
  const main = document.querySelector('.main-content');
  if (!main) return;
  
  const h1 = main.querySelector('h1');
  if (!h1) return;
  
  // Get current page details
  const currentPageTitle = h1.textContent;
  const currentPageParent = document.querySelector('.nav-list-link.active')?.closest('.nav-list-item')?.closest('.nav-list-item');
  
  if (!currentPageParent) return;
  
  const parentTitle = currentPageParent.querySelector('.nav-list-link')?.textContent.trim();
  
  if (!parentTitle) return;
  
  // Create breadcrumb
  const breadcrumb = document.createElement('div');
  breadcrumb.classList.add('breadcrumb-nav');
  
  breadcrumb.innerHTML = `
    <span class="breadcrumb-item"><a href="/">Home</a></span>
    <span class="breadcrumb-item"><a href="#">${parentTitle}</a></span>
    <span class="breadcrumb-item">${currentPageTitle}</span>
  `;
  
  // Insert before h1
  h1.parentNode.insertBefore(breadcrumb, h1);
}

// Function to add next/prev page navigation
function addPageNavigation() {
  const main = document.querySelector('.main-content');
  if (!main) return;
  
  // Find active link in navigation
  const activeLink = document.querySelector('.nav-list-link.active');
  if (!activeLink) return;
  
  const activeItem = activeLink.closest('.nav-list-item');
  
  // Find previous and next items
  let prevItem = activeItem.previousElementSibling;
  let nextItem = activeItem.nextElementSibling;
  
  // Create navigation container
  const navContainer = document.createElement('div');
  navContainer.classList.add('navigation-wrapper');
  
  // Previous page
  if (prevItem) {
    const prevLink = prevItem.querySelector('.nav-list-link');
    if (prevLink) {
      const prevNav = document.createElement('a');
      prevNav.classList.add('prev-page');
      prevNav.href = prevLink.href;
      prevNav.textContent = prevLink.textContent;
      navContainer.appendChild(prevNav);
    }
  }
  
  // Next page
  if (nextItem) {
    const nextLink = nextItem.querySelector('.nav-list-link');
    if (nextLink) {
      const nextNav = document.createElement('a');
      nextNav.classList.add('next-page');
      nextNav.href = nextLink.href;
      nextNav.textContent = nextLink.textContent;
      navContainer.appendChild(nextNav);
    }
  }
  
  // Add to page if we have either prev or next
  if (navContainer.children.length > 0) {
    main.appendChild(navContainer);
  }
}
