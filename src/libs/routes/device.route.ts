import { Router } from "express";
import * as CtrlDevices from '../controllers/device.controller'
const router = Router()

router.get('/devices', CtrlDevices.GetDevices)

export default router