import { Request, Response, Router } from 'express';
import { Route } from '../../../Models';
import { ProjectService } from '../services';

// import bcrypt from 'bcrypt' ;
// import jwt from 'jsonwebtoken' ;

class ProjectRoutes implements Route {
	router = Router();
    service: ProjectService;

	constructor(){
		this.service = new ProjectService();
	}
	
	public initRoute() {
		this.router.get('/', this.getAllProjects);
		this.router.get('/:id_project', this.getEspecificProject);
		this.router.post('/postTeam', this.postEspecificProject);
        this.router.put('/putTeam', this.updateEspecificProject);
        this.router.delete('/delete/:id_member', this.deleteEspecificProject);

        this.router.get('/', this.getAllWorkshop );
		this.router.get('/:id_workshop', this.getEspecificWorkshop);
		this.router.post('/postWorkshop', this.postEspecificWorkshop);
        this.router.put('/putWorkshop', this.updateEspecificWorkshop);
        this.router.delete('/delete/:id_workshop', this.deleteEspecificWorkshop);
	
		return this.router;
	}
    getEspecificProject(arg0: string, getEspecificProject: any) {
        throw new Error('Method not implemented.');
    }
    postEspecificProject(arg0: string, postEspecificProject: any) {
        throw new Error('Method not implemented.');
    }
    updateEspecificProject(arg0: string, updateEspecificProject: any) {
        throw new Error('Method not implemented.');
    }
    deleteEspecificProject(arg0: string, deleteEspecificProject: any) {
        throw new Error('Method not implemented.');
    }
    getAllWorkshop(arg0: string, getAllWorkshop: any) {
        throw new Error('Method not implemented.');
    }
    getEspecificWorkshop(arg0: string, getEspecificWorkshop: any) {
        throw new Error('Method not implemented.');
    }
    postEspecificWorkshop(arg0: string, postEspecificWorkshop: any) {
        throw new Error('Method not implemented.');
    }
    updateEspecificWorkshop(arg0: string, updateEspecificWorkshop: any) {
        throw new Error('Method not implemented.');
    }
    deleteEspecificWorkshop(arg0: string, deleteEspecificWorkshop: any) {
        throw new Error('Method not implemented.');
    }

    private getAllProjects = (req: Request,res:Response) => {
		this.service.getAllProject()
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}

	private getAllMembers = (req: Request, res:Response) => {
		this.service.getAllMembers()
			.then( (testJson => res.status(200).json(testJson)) )
			.catch((errObj) => res.status(500).json(errObj))
	}
	
	private getEspecificMember = (req: Request,res:Response) => {
		const { id_member } = req.params;

		this.service.getEspecificMember( parseInt(id_member) )
			.then(json => res.status(200).json( json ))
			.catch( errObj => res.status(500).json( errObj )  )
	}

	private deleteEspecificMember = (req: Request,res:Response) => {
		const { id_member } = req.params;

		this.service.deleteEspecificMember( parseInt(id_member) )
			.then(json => res.status(200).json( json ))
			.catch( errObj => res.status(500).json( errObj )  )
	}
}

export const memberRouter = new MemberRoutes();
