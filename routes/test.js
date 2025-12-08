const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
  console.log('Middleware kutsuttu. Metodi:', req.method, 'Polku:', req.path);
  next();
});

router.get('/', (req, res) => {
  res.send('GET testi');
});

router.get('/hello/:name', (req, res) => {
  res.send(`Moikka ${req.params.name}!`);
});

router.get('/sum/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.send(`Summa: ${a + b}`);
});

router.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

module.exports = router;