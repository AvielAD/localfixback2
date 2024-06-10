import { Request, Response } from "express"
import * as CtrlService from '../Apps/Diagnosticos/Application/diagnostico.service'
import { AddDiagnosticoDto, UpdateDiagnosticoDto } from "../Apps/Diagnosticos/Domain/diagnostico.dto";

export const GetDiagnosticos = async (req: Request, res: Response) => {
    try {
        const iduser = req.body.uuidKey
        const result = await CtrlService.GetDiagnosticos(iduser);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}

export const AddDiagnosticos = async (req: Request, res: Response) => {
    const newDiagnostic: AddDiagnosticoDto = req.body
    try {
        const iduser = req.body.uuidKey
        const result = await CtrlService.AddDiagnostico(newDiagnostic, iduser);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}

export const UpdateDiagnosticos = async (req: Request, res: Response) => {
    const newDiagnostic: UpdateDiagnosticoDto = req.body
    try {
        const iduser = req.body.uuidKey
        const result = await CtrlService.UpdateDiagnostico(newDiagnostic, iduser);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}