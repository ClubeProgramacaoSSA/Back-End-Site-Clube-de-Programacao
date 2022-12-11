import { Request, Response, Router } from 'express';
import { Route } from '../../../Models';
import { ProjectService } from '../services';

class ProjectRoutes implements Route {
	router = Router();
    projectService: ProjectService;

	constructor(){
		this.projectService = new ProjectService();
	}
	
	public initRoute() {
		this.router.get('/', this.getAllProjects);
		this.router.get('/:projectType', this.getProjectPerType);
		this.router.get('/:id_project', this.getEspecificProject);
		this.router.post('/', this.postEspecificProject);
        this.router.put('/', this.updateEspecificProject);
        this.router.delete('/:id_project', this.deleteEspecificProject);

		return this.router;
	}

    private getAllProjects = (req: Request,res:Response) => {
		this.projectService.getAll()
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private getEspecificProject = (req: Request,res:Response) => {
        const { id_project } = req.params;

		this.projectService.getEspecific(parseInt(id_project))
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private postEspecificProject = (req: Request,res:Response) => {
        const  project  = req.body;

		this.projectService.postEspecific(project)
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private updateEspecificProject = (req: Request,res:Response) => {
        const  project  = req.body;
		this.projectService.updateEspecific(project)
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private deleteEspecificProject = (req: Request,res:Response) => {
        const  { id_project }  = req.params;

		this.projectService.deleteEspecific(parseInt(id_project))
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

    private getProjectPerType = (req: Request,res:Response) => {
        const projectType = req.params.projectType;

		if(!projectType){
			return res.status(400).json({
				message: "Passe um tipo de projeto valido"
			})		
		}

		this.projectService.getPerType(projectType)
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}
}

export const projectRouter = new ProjectRoutes();
