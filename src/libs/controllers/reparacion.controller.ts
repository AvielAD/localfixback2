import { Request, Response } from "express"
import * as CtrlService from '../infraestructure/services/reparacion.service'
import { AddReparacionDto, CreateReparacionDto } from "../dtos/reparacion/reparacion.dto";

export const GetReparaciones = async (req: Request, res: Response) => {
    try {

        const result = await CtrlService.GetReparaciones();
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}

export const GetReparacionesByUUID = async (req: Request, res: Response) => {
    const uuidSearch: string = String(req.params["uuidSearch"]) ?? ""
    try {

        const result = await CtrlService.GetReparacionesByUUID(uuidSearch);
        if(result)
            return res.status(200).json(result);
        else
            return res.status(404).json({})
    } catch (error) {
        return res.status(404).json([])
    }
}

export const AddReparacion = async (req: Request, res: Response) => {
    const newReparacion: CreateReparacionDto = req.body
    try {

        const result = await CtrlService.AddReparacion(newReparacion);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}