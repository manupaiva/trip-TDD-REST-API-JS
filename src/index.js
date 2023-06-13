import { setup } from './app';
import config from './config';

const app = setup();

const PORT = config.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

app.get('/', (req, res) => {
  res.json({ author: config.AUTHOR });
});
