import { Request, Response } from "express"
import * as CtrlService from '../Apps/Empresas/Application/empresa.service'

export const GetGeneralStatistics = async (req: Request, res: Response) => {
    try {
        const iduser = req.body.uuidKey
        const result = await CtrlService.GetInfoEmpresa(iduser);
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json({})
    }
}