const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/data', (req, res) => {
    res.json({ data: 'Sample Data' });
});

app.post('/api/data', (req, res) => {
    const { data } = req.body;
    res.json({ received: data });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
