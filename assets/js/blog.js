document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `<h2>${post.title}</h2><p>${post.content}</p><p><em>by ${post.username}</em></p>`;
      postsContainer.appendChild(postElement);
    });
  
    document.getElementById('backButton').addEventListener('click', function() {
      window.location.href = 'index.html';
    });
  
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      localStorage.setItem('mode', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
  
    if (localStorage.getItem('mode') === 'dark') {
      document.body.classList.add('dark-mode');
    }
  });
  
  