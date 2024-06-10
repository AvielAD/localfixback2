import { Router } from "express";
import * as CtrlDevices from '../controllers/statistics.controller'
import * as AuthCtrl from '../libs/middleware/auth/authcheck.middleware'

const router = Router()

router.get('/statistics',[AuthCtrl.VerifyToken], CtrlDevices.GetGeneralStatistics)

export default router