
/**
 * Constants
 */

const PORT = 1327;

/**
 * Dependencies
 */

const express = require('express');

/**
 * Server mounting
 */

const app = express();
const server = app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
});

/**
 * Routes establishement
 */

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/classic', (req, res) => {
    res.sendFile(__dirname + '/public/html/classic.html');
});
