

const express = require('express');
const axios = require('axios');
const app = express();

app.get('/', async (req, res) => {
    try {
        const response = await axios.get('http://backend:5000/api');
        res.send(`<h1>Frontend 🚀</h1><p>${response.data.message}</p>`);
    } catch (err) {
        res.send(" O Bhai Bhai , Ye Koi ERROR Nahi hai , Thoda Wait kar , Puri Website LOAD Ho rahi hai.");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Frontend running on port ${PORT}`);
});