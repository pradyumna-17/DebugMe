const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get(['/', '/index'], (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.post('/register', (req, res) => {

    console.log("POST route hit");

    console.log(req.body);

    res.send("Success");

});

app.get('/search', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'search.html'));
});

app.get('/add-error', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'add-error.html'));
});

app.get('/details-er', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'details-er.html'));
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});