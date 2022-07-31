import { Router } from 'express';
const routes = Router();
import controllesTest from '../controllers/controllerTeste';


routes.get('/', controllesTest.getTeste);


export default routes;