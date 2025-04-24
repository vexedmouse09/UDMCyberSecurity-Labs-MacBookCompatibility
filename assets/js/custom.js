// Custom JavaScript for collapsible sidebar
document.addEventListener('DOMContentLoaded', function() {
  // Create and add sidebar toggle button
  const sideBar = document.querySelector('.side-bar');
  const main = document.querySelector('.main');
  
  if (sideBar) {
    const toggleButton = document.createElement('button');
    toggleButton.className = 'sidebar-toggle-button';
    toggleButton.innerHTML = '◀';
    toggleButton.setAttribute('aria-label', 'Toggle sidebar');
    sideBar.appendChild(toggleButton);
    
    // Toggle sidebar function
    toggleButton.addEventListener('click', function() {
      const isCollapsed = sideBar.classList.toggle('collapsed');
      main.classList.toggle('expanded');
      toggleButton.innerHTML = isCollapsed ? '▶' : '◀';
      localStorage.setItem('sidebar-collapsed', isCollapsed);
    });
    
    // Check saved state
    if (localStorage.getItem('sidebar-collapsed') === 'true') {
      sideBar.classList.add('collapsed');
      main.classList.add('expanded');
      toggleButton.innerHTML = '▶';
    }
  }
});
