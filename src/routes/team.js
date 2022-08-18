import { Router } from 'express';
import {getTeam,getTeams,postTeam} from '../controllers/teamController.js';

const teamRouter = Router();

teamRouter.post('/', postTeam);
teamRouter.get('/', getTeams);
teamRouter.get('/:id_equipe', getTeam);

export {teamRouter};