import { Router } from 'express';

const router = Router();

router.get('/', (resquest, response) => {
  response.send('Sou um exemplo');
});

export { router };
