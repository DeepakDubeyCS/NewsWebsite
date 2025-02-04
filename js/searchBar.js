// Add this JavaScript code to your main.js file or within <script> tags in your HTML

document.addEventListener('DOMContentLoaded', () => {  // Wait for DOM to load
    const searchInput = document.querySelector('.form-control');  //Your search input
    const newsItems = document.querySelectorAll('.news-item'); // Get all news items
  
  
    searchInput.addEventListener('keyup', (event) => { 
      const searchTerm = event.target.value.toLowerCase();
  
  
      newsItems.forEach(item => {
        const title = item.querySelector('h2').textContent.toLowerCase();
        const content = item.querySelector('p').textContent.toLowerCase();
  
  
        if (title.includes(searchTerm) || content.includes(searchTerm)) {
          item.style.display = 'block'; //Show if match
        } else {
          item.style.display = 'none'; //Hide
        }
      });
  
  
    });
  
  });