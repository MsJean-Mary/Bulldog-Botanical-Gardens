document.addEventListener('DOMContentLoaded', () => {
    fetchBlogPosts();
});

async function fetchBlogPosts() {
    try {
        const response = await fetch('/api/blog-posts');
        const data = await response.json();
        displayBlogPosts(data.posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
        document.getElementById('blog-posts').innerHTML = '<p>Error loading blog posts. Please try again later.</p>';
    }
}

function displayBlogPosts(posts) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p class="post-meta">By ${post.author} on ${formatDate(post.date)}</p>
            <p class="post-excerpt">${post.excerpt}</p>
            <button class="read-more" data-id="${post.id}">Read More</button>
        `;
        blogPostsContainer.appendChild(postElement);
    });

    addReadMoreListeners();
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function addReadMoreListeners() {
    const readMoreButtons = document.querySelectorAll('.read-more');
    readMoreButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const postId = button.getAttribute('data-id');
            try {
                const response = await fetch(`/api/blog-posts/${postId}`);
                const post = await response.json();
                displayFullPost(post);
            } catch (error) {
                console.error('Error fetching full post:', error);
            }
        });
    });
}

function displayFullPost(post) {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = `
        <article class="full-post">
            <h2>${post.title}</h2>
            <p class="post-meta">By ${post.author} on ${formatDate(post.date)}</p>
            <div class="post-content">${post.content}</div>
            <button class="back-to-posts">Back to Posts</button>
        </article>
    `;

    const backButton = document.querySelector('.back-to-posts');
    backButton.addEventListener('click', fetchBlogPosts);
}