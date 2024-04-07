document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
  
    dropdownToggle.addEventListener('click', function() {
      dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });
  
    document.addEventListener('click', function(event) {
      if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.style.display = 'none';
      }
    });
  });
  