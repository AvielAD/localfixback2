import { PrismaClient } from "@prisma/client"
import { AddReparacionDto, CreateReparacionDto } from "../../dtos/reparacion/reparacion.dto"

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

export const CreateReparacion = async (createReparacion: CreateReparacionDto) =>{
    try {
        //Agregar cliente
        const newCliente = await prisma.cliente.create({
            data:{
                nombre: createReparacion.nombre,
                apellido: createReparacion.apellido || "",
                telefono: createReparacion.telefono || "",
                email: createReparacion.email || ""
            }
        })

        //Agregar reparacion
        const newReparacion = await prisma.reparacion.create({
            data:{
                fechaentrega: createReparacion.fechaentrega,
                costototal: createReparacion.costototal,
                idcliente: newCliente.id
            }
        })
        //asociar reparacion - diagnostico
        const newrepairDiag = await prisma.reparacion_diagnostico.create({
            data:{
                idreparacion: newReparacion.id,
                iddiagnostico: createReparacion.iddiagnostico
            }
        })

        return true
    } catch (error) {
        return false
    }
}