import { Router } from "express";
import * as CtrlDevices from '../controllers/device.controller'
import * as AuthCtrl from '../middleware/auth/authcheck.middleware'

const router = Router()

router.get('/devices',[AuthCtrl.VerifyToken], CtrlDevices.GetDevices)

export default router