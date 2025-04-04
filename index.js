// Show loader and hide content when page starts loading
document.addEventListener('DOMContentLoaded', function() {
  const loader = document.querySelector('.loader');
  const pageContent = document.querySelector('.pagecontent');
  
  // Initially hide page content
  pageContent.style.display = 'none';
  
  // Show loader immediately
  loader.style.display = 'flex';
  
  // When everything is loaded
  window.addEventListener('load', function() {
    // Hide loader after a short delay for smooth transition
    setTimeout(function() {
      loader.style.display = 'none';
      // Show page content
      pageContent.style.display = 'block';
    }, 500);
  });
});

// Display current date and time in the footer
let footerContent = document.getElementById('year');
let year = new Date().getFullYear(); // Get the current Year

footerContent.innerHTML = year; // Set the footer content to the current year
