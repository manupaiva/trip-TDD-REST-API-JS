import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { seed } from './utils/exampleTrips';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ express: true }));

const PORT = config.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
// seed();

app.get('/api/v1', (req, res) => {
  res.json({ message: 'Health check passed' });
});
app.get('/api/v1/trips', (req, res) => {
  res.json({ message: 'Health check passed' });
});

export { app, server };
