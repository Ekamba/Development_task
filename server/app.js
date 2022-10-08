import express from 'express';
import cors from 'cors';
import { menuItems } from './menuItems.js';

const app = express();

app.use(express.json({ limit: '50mb', extended: true }));
app.use(
  express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 })
);
app.use(cors());

const PORT = process.env.PORT || 5500;

app.get('/', (req, res) => {
  res.send('the app is available here...');
});

app.get('/api/menus', (req, res) => {
  try {
    res.status(200).send(menuItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(PORT, console.log(`App listening on port ${PORT}`));
