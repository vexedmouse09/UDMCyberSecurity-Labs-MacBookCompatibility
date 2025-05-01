document.addEventListener('DOMContentLoaded', function() {
  // Add theme toggle button to the header
  const header = document.querySelector('.site-header');
  if (!header) return;
  
  // Create toggle container
  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'theme-toggle-container';
  
  // Create toggle switch
  const toggleSwitch = document.createElement('label');
  toggleSwitch.className = 'theme-toggle-switch';
  
  // Create hidden checkbox for toggle state
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.id = 'theme-toggle';
  
  // Default to dark theme (checked)
  checkbox.checked = true;
  
  // Create toggle slider
  const slider = document.createElement('span');
  slider.className = 'theme-toggle-slider';
  
  // Add moon and sun icons
  const moonIcon = document.createElement('span');
  moonIcon.className = 'theme-toggle-icon moon-icon';
  moonIcon.innerHTML = '🌙';
  
  const sunIcon = document.createElement('span');
  sunIcon.className = 'theme-toggle-icon sun-icon';
  sunIcon.innerHTML = '☀️';
  
  // Assemble toggle switch
  toggleSwitch.appendChild(checkbox);
  toggleSwitch.appendChild(slider);
  toggleSwitch.appendChild(moonIcon);
  toggleSwitch.appendChild(sunIcon);
  
  // Create label
  const label = document.createElement('span');
  label.className = 'theme-toggle-label';
  label.textContent = 'Dark Mode';
  
  // Add elements to container
  toggleContainer.appendChild(toggleSwitch);
  toggleContainer.appendChild(label);
  
  // Add container to header
  header.appendChild(toggleContainer);
  
  // Initialize theme from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    checkbox.checked = false;
    label.textContent = 'Light Mode';
  }
  
  // Set up event listener for toggle
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      // Switch to dark theme
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
      label.textContent = 'Dark Mode';
    } else {
      // Switch to light theme
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
      label.textContent = 'Light Mode';
    }
  });
});

/* Add this to your _sass/custom/custom.scss */

// Theme Toggle Styles
.theme-toggle-container {
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 1rem;
}

.theme-toggle-switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
  margin-right: 8px;
}

.theme-toggle-switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.theme-toggle-slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #44475a;
  transition: .4s;
  border-radius: 24px;
}

.theme-toggle-slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: #f8f8f2;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .theme-toggle-slider {
  background-color: #6272a4;
}

input:checked + .theme-toggle-slider:before {
  transform: translateX(26px);
  background-color: #bd93f9;
}

.theme-toggle-icon {
  position: absolute;
  top: 3px;
  font-size: 14px;
  transition: opacity 0.3s ease;
}

.moon-icon {
  right: 6px;
  opacity: 0;
}

.sun-icon {
  left: 6px;
  opacity: 1;
}

input:checked ~ .moon-icon {
  opacity: 1;
}

input:checked ~ .sun-icon {
  opacity: 0;
}

.theme-toggle-label {
  font-size: 14px;
  color: #f8f8f2;
}

// Light Theme Styles
body.light-theme {
  // Background and text
  --body-background-color: #f8f8f2;
  --body-text-color: #282a36;
  --sidebar-color: #f1f1f1;
  --border-color: #ddd;
  
  // Headings and links
  --body-heading-color: #44475a;
  --link-color: #6272a4;
  
  // Code blocks
  --code-background-color: #f1f1f1;
  
  // Tables
  --table-background-color: #ffffff;
  
  // Search
  --search-background-color: #ffffff;
  --search-result-preview-color: #44475a;
  
  // Button colors
  --btn-primary-color: #6272a4;
  --base-button-color: #f1f1f1;
  
  // Apply these variables
  background-color: var(--body-background-color);
  color: var(--body-text-color);
}

body.light-theme .site-header,
body.light-theme .site-footer,
body.light-theme .side-bar {
  background-color: var(--sidebar-color);
  border-color: var(--border-color);
}

body.light-theme .main-content h1,
body.light-theme .main-content h2,
body.light-theme .main-content h3,
body.light-theme .main-content h4 {
  color: var(--body-heading-color);
}

body.light-theme a {
  color: var(--link-color);
}

body.light-theme pre.highlight {
  background-color: var(--code-background-color);
}

body.light-theme .search-input {
  background-color: var(--search-background-color);
  color: var(--body-text-color);
}

body.light-theme .theme-toggle-label {
  color: var(--body-text-color);
}
