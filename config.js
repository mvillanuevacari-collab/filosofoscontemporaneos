const path = require('path');
const express = require('express');
const app = express();
const STATIC_DIR = path.join(__dirname, 'proyecto'); 
app.use(express.static(STATIC_DIR));
app.get('/', (req, res) => {
    res.sendFile(path.join(STATIC_DIR, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
