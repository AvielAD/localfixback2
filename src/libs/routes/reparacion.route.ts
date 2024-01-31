import { Router } from "express";
import * as CtrlReparacion from '../controllers/reparacion.controller'
import * as AuthCtrl from '../middleware/auth/authcheck.middleware'

const router = Router()

router.get('/reparacion',[AuthCtrl.VerifyToken], CtrlReparacion.GetReparaciones)
router.get('/reparacion/:uuidSearch',[AuthCtrl.VerifyToken], CtrlReparacion.GetReparacionesByUUID)
router.post('/reparacion',[AuthCtrl.VerifyToken], CtrlReparacion.AddReparacion)

export default router