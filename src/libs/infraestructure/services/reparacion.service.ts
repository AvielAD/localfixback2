
import { ServerResponseDTO } from '../../dtos/ServerResponse/ServerResponse.dto'
import { AddReparacionDto, CreateReparacionDto } from '../../dtos/reparacion/reparacion.dto'
import * as CtrlRepository from '../repositories/reparacion.repository'

export const GetReparaciones = async ()=>{
    let devices = await CtrlRepository.GetReparaciones()
    return devices
}

export const AddReparacion = async (reparacion: CreateReparacionDto)=> {
    const response = {} as ServerResponseDTO
    let responseReparacion = await CtrlRepository.CreateReparacion(reparacion)

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