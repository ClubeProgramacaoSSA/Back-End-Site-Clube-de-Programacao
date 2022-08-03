import { Router } from 'express';
const membersRouter = express.Router();
import memberDelectionController from '../controllers/memberDelectionController';

membersRouter.delete('/:id_membro', memberDelectionController.deleteMember);

export { membersRouter };