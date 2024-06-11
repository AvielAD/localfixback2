import { PrismaClient } from "@prisma/client"
import { AddReparacionDto, CreateReparacionDto, CreateReparacionFirstDto, ReparacionAllDto } from "../Domain/reparacion/reparacion.dto"

const prisma = new PrismaClient()

export const GetReparaciones = async (idUser: string) => {
    try {
        const empresa = await prisma.usuarioempresa.findFirstOrThrow({
            where: {
                idusuario: idUser
            }
        })
        //LLamar a query para la vista 
        const responseView = await prisma.
            $queryRaw`select 
        r.uuid, 
        r.recepcion, 
        r.entrega, 
        r.modelo, 
        r.marca, 
        r.falla,
        r.diagnostico 
        from reparacionesview r where r.empresa = ${empresa.idempresa}`
        return responseView
    } catch (error) {
        return []
    }
}

export const GetReparacionByUUID = async (uuidSearch: string, idUser: string) => {
    let searchResponse = {} as ReparacionAllDto

    try {
        const empresa = await prisma.usuarioempresa.findFirstOrThrow({
            where: {
                idusuario: idUser
            }
        })

        const responseView:Array<ReparacionAllDto> = await prisma.
            $queryRaw`select *
        from reparacionesview r 
        where r.empresa = ${empresa.idempresa} 
        and r.uuid::text = ${uuidSearch}`

        return responseView[0]

    } catch (error) {
        return searchResponse

    }
}

export const AddReparacion = async (reparacion: AddReparacionDto, idUser: string) => {
    try {
        const empresa = await prisma.usuarioempresa.findFirstOrThrow({
            where: {
                idusuario: idUser
            }
        })
        const newDiagnostico = await prisma.reparacion.create({
            data: {
                ...reparacion,
                idempresa: empresa.idempresa
            }
        })
        if (newDiagnostico)
            return true
        return false

    } catch (error) {
        console.log('Error: ' + error)
        return false
    }
}

export const CreateReparacion = async (createReparacion: CreateReparacionDto, idUser: string) => {
    try {
        //Agregar cliente
        const empresa = await prisma.usuarioempresa.findFirstOrThrow({
            where: {
                idusuario: idUser
            }
        })
        const newCliente = await prisma.cliente.create({
            data: {
                nombre: createReparacion.nombre,
                apellido: createReparacion.apellido || "",
                telefono: createReparacion.telefono || "",
                email: createReparacion.email || "",
            }
        })

        //Agregar reparacion
        const newReparacion = await prisma.reparacion.create({
            data: {
                fechaentrega: createReparacion.fechaentrega,
                costototal: createReparacion.costototal,
                idcliente: newCliente.id,
                firststage: false,
                idempresa: empresa.idempresa
            }
        })
        //asociar reparacion - diagnostico
        const newrepairDiag = await prisma.reparacion_diagnostico.create({
            data: {
                idreparacion: newReparacion.id,
                iddiagnostico: createReparacion.iddiagnostico
            }
        })

        return true
    } catch (error) {
        return false
    }
}

export const CreateReparacionFirst = async (createReparacion: CreateReparacionFirstDto, idUser: string) => {
    try {
        //Cliente
        const empresa = await prisma.usuarioempresa.findFirstOrThrow({
            where: {
                idusuario: idUser
            }
        })
        const newCliente = await prisma.cliente.create({
            data: {
                nombre: createReparacion.nombre,
                apellido: createReparacion.apellido || "",
                telefono: createReparacion.telefono || "",
            }
        })
        //Diagnostico

        const newDiagnostico = await prisma.diagnostico.create({
            data: {
                cliente: "N/A",
                descripcionfalla: createReparacion.descripcionfalla,
                sugerenciareparacion: createReparacion.sugerenciareparacion,
                costopresupuesto: createReparacion.costototal,
                idequipo: createReparacion.idequipo,
                firststage: false,
                idempresa: empresa.idempresa
            }
        })
        //Reparacion
        const newReparacion = await prisma.reparacion.create({
            data: {
                fechaentrega: createReparacion.fechaentrega,
                costototal: createReparacion.costototal,
                idcliente: newCliente.id,
                firststage: true,
                idempresa: empresa.idempresa
            }
        })

        //Reparacion Diagnostico

        const newRepairDiag = await prisma.reparacion_diagnostico.create({
            data: {
                idreparacion: newReparacion.id,
                iddiagnostico: newDiagnostico.id
            }
        })

        return true
    } catch (error) {
        console.log(error)
        return false
    }
}