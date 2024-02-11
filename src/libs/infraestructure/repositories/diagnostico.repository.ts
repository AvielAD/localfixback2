import { PrismaClient } from "@prisma/client"
import { AddDiagnosticoDto, UpdateDiagnosticoDto } from "../../dtos/diagnostico/diagnostico.dto"

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
            data:{
                ...diagnostico,
                firststage: true
            }
        }) 
        if(newDiagnostico)
            return true
        return false
        
    } catch (error) {
        return false
    }
}

export const UpdateDiagnostico = async (diagnostico: UpdateDiagnosticoDto) =>{
    try{
        const updateDiagnostico = await prisma.diagnostico.update({
            where:{
                id: diagnostico.id
            },
            data:{
                descripcionfalla: diagnostico.descripcionfalla,
                sugerenciareparacion: diagnostico.sugerenciareparacion,
            }
        })

        return true
    }catch(error){
        return false
    }
}