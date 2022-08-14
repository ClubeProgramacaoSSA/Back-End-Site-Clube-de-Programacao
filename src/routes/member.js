import { Router } from 'express';
const routes = express.Router();

import memberController from '../controllers/memberLoginController';

routes.delete('/:id_membro', memberController.deleteMember);
routes.post('/', memberController.postLogin);

export {routes};