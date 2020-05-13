const createServer = require('http').createServer;
const express = require('express');
const path = require('path');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static('dist'));

const server = createServer(app);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
