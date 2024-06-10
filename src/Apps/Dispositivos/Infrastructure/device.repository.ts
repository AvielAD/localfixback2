import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const GetDevices = async ()=>{
    try {
        const devices = await prisma.devices.findMany()

        return devices

    } catch (error) {
        return []
    }
}