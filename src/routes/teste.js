import { Router } from 'express';
const testRouter = Router();
import {getTeste} from '../controllers/controllerTeste.js';


testRouter.get('*', getTeste);


export {testRouter};