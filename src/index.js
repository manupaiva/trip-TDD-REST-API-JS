import { setup } from './app';

const app = setup();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
