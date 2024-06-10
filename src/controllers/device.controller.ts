import { Request, Response } from "express"
import * as CtrlService from '../Apps/Dispositivos/Application/device.service'

export const GetDevices = async (req: Request, res: Response) => {
    try {

        const result = await CtrlService.GetDevices();
        return res.status(200).json(result);

    } catch (error) {
        return res.status(404).json([])
    }
}