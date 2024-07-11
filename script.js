// Add event listeners to animated links
document.querySelectorAll('.animated-link').forEach(link => {
    link.addEventListener('mouseover', () => {
      link.classList.add('animated-link-hover');
    });
  
    link.addEventListener('mouseout', () => {
      link.classList.remove('animated-link-hover');
    });
  });
  
  // Add event listeners to animated articles
  document.querySelectorAll('.animated-article').forEach(article => {
    article.addEventListener('mouseover', () => {
      article.classList.add('animated-article-hover');
    });
  
    article.addEventListener('mouseout', () => {
      article.classList.remove('animated-article-hover');
    });
  });
  // Get the container element where you want to add the new articles
const blogContainer = document.getElementById('blog-container');

// Add an event listener to the "Add Blog" button
document.getElementById('add-blog-btn').addEventListener('click', () => {
  // Create a new article element
  const newArticle = document.createElement('article');
  newArticle.innerHTML = `
    <h2>New Blog Post</h2>
    <p>This is a new blog post.</p>
  `;

  // Add the new article to the container
  blogContainer.appendChild(newArticle);
});