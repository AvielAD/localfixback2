import express, {Express} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Devices from './routes/device.route'
import Diagnostico from './routes/diagnostico.route'
import Reparacion from './routes/reparacion.route'
import Statistics from './routes/statistics.route'

const app: Express = express()

app.use(cors())
app.use(express.json())

app.use('/api', Devices);
app.use('/api', Diagnostico);
app.use('/api', Reparacion);
app.use('/api', Statistics);

export default app