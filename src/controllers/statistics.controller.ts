import { Request, Response } from "express"
import * as CtrlService from '../libs/infraestructure/services/statistics.service'

export const GetGeneralStatistics = async (req: Request, res: Response) => {
    try {

        const result = await CtrlService.GetGeneralStatistics();
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json({})
    }
}