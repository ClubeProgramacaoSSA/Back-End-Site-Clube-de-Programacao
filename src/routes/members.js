import { Router } from 'express';
const membersRouter = express.Router();
import {deleteMember, postLogin} from '../controllers/membersController';

membersRouter.post('/', postLogin)
membersRouter.delete('/:id_membro', deleteMember);

export { membersRouter };