import { Router } from "express";
import * as CtrlDiagnostico from '../controllers/diagnostico.controller'
import * as AuthCtrl from '../middleware/auth/authcheck.middleware'

const router = Router()

router.get('/diagnostico',[AuthCtrl.VerifyToken], CtrlDiagnostico.GetDiagnosticos)
router.post('/diagnostico',[AuthCtrl.VerifyToken], CtrlDiagnostico.AddDiagnosticos)
router.put('/diagnostico',[AuthCtrl.VerifyToken], CtrlDiagnostico.UpdateDiagnosticos)

export default router