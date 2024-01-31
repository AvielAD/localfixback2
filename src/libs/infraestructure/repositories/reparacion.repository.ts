import { PrismaClient } from "@prisma/client"
import { AddReparacionDto, CreateReparacionDto, ReparacionAllDto } from "../../dtos/reparacion/reparacion.dto"

const prisma = new PrismaClient()

export const GetReparaciones = async ()=>{
    try {
        const reparaciones = await prisma.reparacionesview.findMany({
            select:{
                uuid: true,
                recepcion: true,
                entrega: true,
                modelo: true,
                marca: true,
                falla: true, 
                diagnostico: true,
            }
        })


        return reparaciones

    } catch (error) {
        return []
    }
}

export const GetReparacionByUUID= async (uuidSearch: string) =>{
    let searchResponse = {} as ReparacionAllDto

    try{
        const searchbyuuid = await prisma.reparacionesview.findFirst({
            where:{
                uuid: uuidSearch
            }
        })

        if(searchbyuuid != null){
            searchResponse = {
                id: searchbyuuid.id,
                uuid: searchbyuuid.uuid ?? "",
                nombre: searchbyuuid.nombre ?? "",
                apellido: searchbyuuid.apellido ?? "",
                telefono: searchbyuuid.telefono ?? "",
                recepcion:  searchbyuuid.recepcion ?? new Date(),
                entrega: searchbyuuid.entrega ?? new Date(),
                modelo: searchbyuuid.modelo ?? "",
                marca: searchbyuuid.marca ?? "",
                falla: searchbyuuid.falla ?? "",
                diagnostico: searchbyuuid.diagnostico ?? "",
                presupuesto: parseFloat( searchbyuuid.presupuesto?.toString() || "0") ?? 0.0,
                total: parseFloat( searchbyuuid.presupuesto?.toString() || "0") ?? 0.0,
            }
            return searchResponse
        }

        return searchResponse
    }catch(error){
        return searchResponse

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