const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.get('/recipes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'recipes.html'));
});

app.get('/health', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'health.html'));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'stats.html'));
});

app.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'blog.html'));
});

// we could just put the json's in the public folder but whats the fun in that?

app.get('/api/recipes', (req, res) => {
    const recipesFile = path.join(__dirname, 'DynamicContent', 'recipes.json');
    fs.readFile(recipesFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Unable to read recipes file');
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/blog-posts', (req, res) => {
    const blogPostsFile = path.join(__dirname, 'DynamicContent', 'blog-posts.json');
    fs.readFile(blogPostsFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Unable to read blog posts file');
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/blog-posts/:id', (req, res) => {
    const blogPostsFile = path.join(__dirname, 'DynamicContent', 'blog-posts.json');
    fs.readFile(blogPostsFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Unable to read blog posts file');
        }
        const posts = JSON.parse(data).posts;
        const post = posts.find(p => p.id === parseInt(req.params.id));
        if (post) {
            res.json(post);
        } else {
            res.status(404).send('Post not found');
        }
    });
});

app.get('/api/events', (req, res) => {
    const recipesFile = path.join(__dirname, 'DynamicContent', 'upcoming.json');
    fs.readFile(recipesFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Unable to read recipes file');
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/health', (req, res) => {
    const recipesFile = path.join(__dirname, 'DynamicContent', 'health.json');
    fs.readFile(recipesFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Unable to read recipes file');
        }
        res.json(JSON.parse(data));
    });
});

app.get('/api/navbar', (req, res) => {
    const recipesFile = path.join(__dirname, 'DynamicContent', 'navbar.json');
    fs.readFile(recipesFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Unable to read recipes file');
        }
        res.json(JSON.parse(data));
    });
});

// actual api routes

app.get('/api/stats', (req, res) => {
    const statsFile = path.join(__dirname, 'DynamicContent', 'statdata.json');
    const startTime = Date.now();

    const checkFileAndSend = () => {
        fs.open(statsFile, 'r', (err, fd) => {
            if (err) {
                if (err.code === 'EBUSY') {
                    if (Date.now() - startTime > 5000) {
                        return res.status(500).send('Unable to read stats file: file is busy');
                    }
                    setTimeout(checkFileAndSend, 50);
                } else {
                    return res.status(500).send('Unable to read stats file');
                }
            } else {
                fs.readFile(fd, 'utf8', (err, data) => {
                    if (err) {
                        return res.status(500).send('Unable to read stats file');
                    }
                    res.json(JSON.parse(data));
                });
            }
        });
    };

    checkFileAndSend();
});

// 404 handler, ALWAYS keep at the bottom of the file
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});


app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});