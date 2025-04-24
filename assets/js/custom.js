// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create sidebar toggle button
  const button = document.createElement('button');
  button.id = 'sidebar-button';
  button.innerHTML = '◀';
  button.setAttribute('aria-label', 'Toggle sidebar');
  document.body.appendChild(button);
  
  // Check localStorage for previous state
  if (localStorage.getItem('sidebar-collapsed') === 'true') {
    document.body.classList.add('sidebar-collapsed');
    button.innerHTML = '▶';
  }
  
  // Add click event handler
  button.addEventListener('click', function() {
    document.body.classList.toggle('sidebar-collapsed');
    
    if (document.body.classList.contains('sidebar-collapsed')) {
      button.innerHTML = '▶';
      localStorage.setItem('sidebar-collapsed', 'true');
    } else {
      button.innerHTML = '◀';
      localStorage.setItem('sidebar-collapsed', 'false');
    }
  });
});
