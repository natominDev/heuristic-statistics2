const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get('/api/finalRatings', (req, res) => {
    const ratingData = require('./datas/finalRatings.json')
    res.json(ratingData);
});

app.get('/api/ahc1', (req, res) => {
    const ahc1 = require('./datas/ahc1.json')
    res.json(ahc1);
});

app.get('/api/ahc2', (req, res) => {
    const ahc2 = require('./datas/ahc2.json')
    res.json(ahc2);
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.listen(port, () => {
    console.log(`listening on *:${port}`);
});