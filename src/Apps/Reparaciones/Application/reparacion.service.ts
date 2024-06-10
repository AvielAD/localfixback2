
import { ServerResponseDTO } from '../../../Domain/ServerResponse/ServerResponse.dto'
import { AddReparacionDto, CreateReparacionDto, CreateReparacionFirstDto } 
from '../Domain/reparacion/reparacion.dto'
import * as CtrlRepository from '../Infrastructure/reparacion.repository'

export const GetReparaciones = async (idUser: string)=>{
    let devices = await CtrlRepository.GetReparaciones(idUser)
    return devices
}


export const GetReparacionesByUUID = async (uuidSearch: string, idUser: string)=>{
    let devices = await CtrlRepository.GetReparacionByUUID(uuidSearch, idUser)
    return devices
}
export const AddReparacion = async (reparacion: CreateReparacionDto, idUser: string)=> {
    const response = {} as ServerResponseDTO
    let responseReparacion = await CtrlRepository.CreateReparacion(reparacion, idUser)

    if(responseReparacion){
        response.message = 'Reparacion agregada correctamente'
        response.succeeded = true
    }
    else{
        response.message = 'Se ha presentado un problema al agregar la reparacion'
        response.succeeded = false
    }
    return response
}

export const AddReparacionFirst = async (reparacion: CreateReparacionFirstDto, idUser: string)=> {
    const response = {} as ServerResponseDTO
    let responseReparacion = await CtrlRepository.CreateReparacionFirst(reparacion, idUser)

    if(responseReparacion){
        response.message = 'Reparacion agregada correctamente'
        response.succeeded = true
    }
    else{
        response.message = 'Se ha presentado un problema al agregar la reparacion'
        response.succeeded = false
    }
    return response
}