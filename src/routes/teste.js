import { Router } from 'express';
import { getTeste } from '../controllers/controllerTeste.js';
const testRouter = Router();

testRouter.get('*', getTeste);

export { testRouter };