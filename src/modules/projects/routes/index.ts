import { Request, Response, Router } from 'express';
import { Route } from '../../../Models';
import { ProjectService } from '../services';

class ProjectRoutes implements Route {
	router = Router();
    service: ProjectService;

	constructor(){
		this.service = new ProjectService();
	}
	
	public initRoute() {
		this.router.get('/', this.getAllProjects);
		this.router.get('/projectType', this.getProjectPerType);
		this.router.get('/:id_project', this.getEspecificProject);
		this.router.post('/postProject', this.postEspecificProject);
        this.router.put('/putProject', this.updateEspecificProject);
        this.router.delete('/delete/:id_project', this.deleteEspecificProject);

        
	
		return this.router;
	}

    private getAllProjects = (req: Request,res:Response) => {
		this.service.getAllProjects()
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private getEspecificProject = (req: Request,res:Response) => {
        const { id_project } = req.params;

		this.service.getEspecificProject(parseInt(id_project))
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private postEspecificProject = (req: Request,res:Response) => {
        const  project  = req.body;

		this.service.postEspecificProject(project)
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private updateEspecificProject = (req: Request,res:Response) => {
        const  project  = req.body;
		this.service.updateEspecificProject(project)
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private deleteEspecificProject = (req: Request,res:Response) => {
        const  { id_project }  = req.params;

		this.service.deleteEspecificProject(parseInt(id_project))
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private getProjectPerType = (req: Request,res:Response) => {
        const  projectType  = req.body.projectType;

		this.service.getProjectPerType(projectType)
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}
}

export const projectRouter = new ProjectRoutes();
