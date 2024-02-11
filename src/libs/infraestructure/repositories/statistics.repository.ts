import { PrismaClient } from "@prisma/client"
import { statisticsDto } from "../../dtos/statistics/statistics.dto"
const prisma = new PrismaClient()

export const GeneralStatistics = async ()=>{
    let responseStats = {} as statisticsDto

    try {

        responseStats.diagnosticos = await prisma.diagnostico.count() ?? 0
        responseStats.reparaciones = await prisma.reparacion.count() ?? 0

        responseStats.reparaciondirecta = await prisma.reparacion.count({
            where:{
                firststage: true
            }
        })

        responseStats.diagnosticoareparacion = await prisma.reparacion_diagnostico.count({
            where: {
                diagnostico:{
                    firststage: true
                }
            }
        })
        return responseStats
    } catch (error) {
        return responseStats
    }

}