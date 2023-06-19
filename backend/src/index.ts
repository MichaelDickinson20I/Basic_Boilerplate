import express from 'express';
import { db } from './database';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// test funcc
app.get('/patients', async (_, res) => {
  try {
    const snapshot = await db.collection('patients').get();
    const patients = snapshot.docs.map((doc) => doc.data());
    res.json(patients);
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send(err.message);
    }
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
