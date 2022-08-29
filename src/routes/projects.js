import { Router } from 'express'
const projectsRouter = Router();
import { getProject, getProjects, postProject, putProject} from '../controllers/projectsController';

projectsRouter.get('/', getProjects);
projectsRouter.get('/:id_project', getProject);

export { projectsRouter };