import { PrismaClient } from "@prisma/client"
import { AddDiagnosticoDto } from "../../dtos/diagnostico/diagnostico.dto"

const prisma = new PrismaClient()

export const GetDiagnosticos = async ()=>{
    try {
        const diagnosticos = await prisma.diagnosticosview.findMany()

        return diagnosticos

    } catch (error) {
        return []
    }
}

export const AddDiagnostico = async(diagnostico: AddDiagnosticoDto)=>{
    try {
        const newDiagnostico = await prisma.diagnostico.create({
            data:diagnostico
        }) 
        if(newDiagnostico)
            return true
        return false
        
    } catch (error) {
        return false
    }
}