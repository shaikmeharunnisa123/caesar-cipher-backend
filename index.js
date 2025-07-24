const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

function caesarCipher(text, shift, mode = 'encode') {
    if (mode === 'decode') shift = -shift;

    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const base = char === char.toUpperCase() ? 65 : 97;
            return String.fromCharCode((char.charCodeAt(0) - base + shift + 26) % 26 + base);
        } else {
            return char;
        }
    }).join('');
}

app.post('/encode', (req, res) => {
    const { message, shift } = req.body;
    const result = caesarCipher(message, shift, 'encode');
    res.json({ encoded: result });
});

app.post('/decode', (req, res) => {
    const { message, shift } = req.body;
    const result = caesarCipher(message, shift, 'decode');
    res.json({ decoded: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
