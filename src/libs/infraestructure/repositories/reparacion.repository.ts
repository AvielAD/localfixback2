import { PrismaClient } from "@prisma/client"
import { AddReparacionDto } from "../../dtos/reparacion/reparacion.dto"

const prisma = new PrismaClient()

export const GetReparaciones = async ()=>{
    try {
        const reparaciones = await prisma.reparacion.findMany()

        return reparaciones

    } catch (error) {
        return []
    }
}

export const AddReparacion = async(reparacion: AddReparacionDto)=>{
    try {
        const newDiagnostico = await prisma.reparacion.create({
            data:reparacion
        }) 
        if(newDiagnostico)
            return true
        return false
        
    } catch (error) {
        console.log('Error: '+error)
        return false
    }
}