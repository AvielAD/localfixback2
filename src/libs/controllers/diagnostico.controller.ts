import { Request, Response } from "express"
import * as CtrlService from '../infraestructure/services/diagnostico.service'
import { AddDiagnosticoDto } from "../dtos/diagnostico/diagnostico.dto";

export const GetDiagnosticos = async (req: Request, res: Response) => {
    try {

        const result = await CtrlService.GetDiagnosticos();
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}

export const AddDiagnosticos = async (req: Request, res: Response) => {
    const newDiagnostic: AddDiagnosticoDto = req.body
    try {

        const result = await CtrlService.AddDiagnostico(newDiagnostic);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}