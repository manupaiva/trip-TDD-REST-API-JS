import express from 'express';
import bodyParser from 'body-parser';
import config from './config';
import { seed } from './utils/exampleTrips';
import { router as indexRoute } from './routes/index';
import { dbConnect } from './db';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ express: true }));

const PORT = config.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
// seed();

dbConnect();

app.use('/', indexRoute);

export { app, server };
