import { Response, Request } from "express";

export function routeNotFound(req: Request, res: Response) {
    res.status(404).json({ message: 'Rota não encontrada' })
}