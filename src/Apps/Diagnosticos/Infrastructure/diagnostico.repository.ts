import { PrismaClient } from "@prisma/client"
import { AddDiagnosticoDto, UpdateDiagnosticoDto } from "../Domain/diagnostico.dto"

const prisma = new PrismaClient()

export const GetDiagnosticos = async (idUser: string)=>{
    try {

        const empresa = await prisma.usuarioempresa.findFirstOrThrow({
            where:{
                idusuario: idUser
            }
        })
        //LLamar a query para la vista 
        const responseView = await prisma.
        $queryRaw`select 
        d.id, 
        d.nombre, 
        d.modelopopular, 
        d.fecha, 
        d.descripcionfalla,
        d.costopresupuesto 
        from diagnosticosview d where d.empresa = ${empresa.idempresa}`

        return responseView

    } catch (error) {

        return []
    }
}

export const AddDiagnostico = async(diagnostico: AddDiagnosticoDto, idUser: string)=>{
    try {
        const empresa = await prisma.usuarioempresa.findFirstOrThrow({
            where:{
                idusuario: idUser
            }
        })
        const newDiagnostico = await prisma.diagnostico.create({
            data:{
                cliente: diagnostico.cliente,
                descripcionfalla: diagnostico.descripcionfalla,
                sugerenciareparacion: diagnostico.sugerenciareparacion,
                costopresupuesto: diagnostico.costopresupuesto,
                idequipo: diagnostico.idequipo,
                idempresa: empresa.idempresa,
                firststage: true
            }
        }) 
        if(newDiagnostico)
            return true
        return false
        
    } catch (error) {
        console.log(error)
        return false
    }
}

export const UpdateDiagnostico = async (diagnostico: UpdateDiagnosticoDto, idUser: string) =>{
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