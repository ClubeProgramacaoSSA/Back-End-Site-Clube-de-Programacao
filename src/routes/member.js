import { Router } from 'express';
const membersRouter = Router();

import { deleteMember,postLogin } from '../controllers/memberController.js';

membersRouter.delete('/:id_membro', deleteMember);
membersRouter.post('/', postLogin);

export {membersRouter};