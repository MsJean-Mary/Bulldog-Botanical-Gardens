const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/recipes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'recipes.html'));
});

app.get('/api/recipes', (req, res) => {
    const recipesFile = path.join(__dirname, 'DynamicContent', 'recipes.json');
    fs.readFile(recipesFile, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Unable to read recipes file');
        }
        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`);
});