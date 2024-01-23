import { Router } from "express";
import * as CtrlReparacion from '../controllers/reparacion.controller'
import * as AuthCtrl from '../middleware/auth/authcheck.middleware'

const router = Router()

router.get('/reparacion',[AuthCtrl.VerifyToken], CtrlReparacion.GetReparaciones)
router.post('/reparacion',[AuthCtrl.VerifyToken], CtrlReparacion.AddDiagnosticos)

export default router