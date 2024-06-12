import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export const GetInfoEmpresa = async (idUser: string) => {
    try {
        const empresa = await prisma.usuarioempresa.findFirstOrThrow({
            where:{
                idusuario: idUser
            }
        })

        const infoEmpresa = await prisma.empresa.findFirstOrThrow({
            where:{
                id : empresa.idempresa
            }
        })
        return infoEmpresa
    } catch (error) {
        
    }
}

