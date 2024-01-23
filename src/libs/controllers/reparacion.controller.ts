import { Request, Response } from "express"
import * as CtrlService from '../infraestructure/services/reparacion.service'
import { AddReparacionDto } from "../dtos/reparacion/reparacion.dto";

export const GetReparaciones = async (req: Request, res: Response) => {
    try {

        const result = await CtrlService.GetReparaciones();
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}

export const AddDiagnosticos = async (req: Request, res: Response) => {
    const newReparacion: AddReparacionDto = req.body
    try {

        const result = await CtrlService.AddReparacion(newReparacion);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}