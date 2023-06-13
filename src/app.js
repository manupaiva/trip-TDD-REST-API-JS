import express from 'express';
import bodyParser from 'body-parser';

export const setup = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ express: true }));

  return app;
};
