import { Request, Response } from "express"
import * as CtrlService from '../Apps/Reparaciones/Application/reparacion.service'
import { AddReparacionDto, CreateReparacionDto, CreateReparacionFirstDto } from "../Apps/Reparaciones/Domain/reparacion/reparacion.dto";

export const GetReparaciones = async (req: Request, res: Response) => {
    try {
        const iduser = req.body.uuidKey
        const result = await CtrlService.GetReparaciones(iduser);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}

export const GetReparacionesByUUID = async (req: Request, res: Response) => {
    const uuidSearch: string = String(req.params["uuidSearch"]) ?? ""
    try {
        const iduser = req.body.uuidKey
        const result = await CtrlService.GetReparacionesByUUID(uuidSearch, iduser);
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
        const iduser = req.body.uuidKey
        const result = await CtrlService.AddReparacion(newReparacion, iduser);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}

export const AddReparacionFirst = async (req:Request, res: Response)=>{
    const newReparacion: CreateReparacionFirstDto = req.body
    try {
        const iduser = req.body.uuidKey
        const result = await CtrlService.AddReparacionFirst(newReparacion, iduser);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}