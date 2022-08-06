import { Router } from 'express';
const routes = express.Router();
import memberDelectionController from '../controllers/memberDelectionController';

routes.delete('/:id_membro', memberDelectionController.deleteMember);

export { routes };