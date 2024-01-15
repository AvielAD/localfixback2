import express, {Express} from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Devices from './libs/routes/device.route'
const app: Express = express()

app.use(cors())
app.use(express.json())

app.use('/api', Devices);

export default app