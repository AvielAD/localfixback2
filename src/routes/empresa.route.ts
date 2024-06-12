import { Router } from "express";
import * as CtrlEmpresa from '../controllers/empresa.controller'
import * as AuthCtrl from '../libs/middleware/auth/authcheck.middleware'

const router = Router()

router.get('/empresa/info',[AuthCtrl.VerifyToken], CtrlEmpresa.GetGeneralStatistics)

export default router