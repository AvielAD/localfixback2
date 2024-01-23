import express, {Express} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Devices from './libs/routes/device.route'
import Diagnostico from './libs/routes/diagnostico.route'
import Reparacion from './libs/routes/reparacion.route'

const app: Express = express()

app.use(cors())
app.use(express.json())

app.use('/api', Devices);
app.use('/api', Diagnostico);
app.use('/api', Reparacion);

export default app