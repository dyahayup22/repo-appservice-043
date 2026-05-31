const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
 res.send('<h1>Praktikum Azure App Service</h1><p>Aplikasi berjalan.</p><p>Dyah Ayu Puspitosari-043.</p>');
});

app.get('/status', (req, res) => {
 res.json({ status: 'running', service: 'Azure App Service', timestamp: new Date() });
});

app.get('/profil', (req, res) => {
 res.json({ mataKuliah: 'Komputasi Awan', topik: 'Serverless Azure' });
});

app.listen(port, () => console.log(`Server berjalan pada port ${port}`));
