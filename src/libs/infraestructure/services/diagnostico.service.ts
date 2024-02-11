
import { ServerResponseDTO } from '../../dtos/ServerResponse/ServerResponse.dto'
import { AddDiagnosticoDto, UpdateDiagnosticoDto } from '../../dtos/diagnostico/diagnostico.dto'
import * as CtrlRepository from '../repositories/diagnostico.repository'

export const GetDiagnosticos = async ()=>{
    let devices = await CtrlRepository.GetDiagnosticos()
    return devices
}

export const AddDiagnostico = async (diagnostico: AddDiagnosticoDto)=> {
    const response = {} as ServerResponseDTO
    let responseDiagnostico = await CtrlRepository.AddDiagnostico(diagnostico)

    if(responseDiagnostico){
        response.message = 'Diagnostico agregado correctamente'
        response.succeeded = true
    }
    else{
        response.message = 'Se ha presentado un problema al agregar el diagnostico'
        response.succeeded = false
    }
    return response
}

export const UpdateDiagnostico = async (diagnostico: UpdateDiagnosticoDto)=> {
    const response = {} as ServerResponseDTO
    let responseDiagnostico = await CtrlRepository.UpdateDiagnostico(diagnostico)

    if(responseDiagnostico){
        response.message = 'Diagnostico actualizado correctamente'
        response.succeeded = true
    }
    else{
        response.message = 'Se ha presentado un problema al actualizar el diagnostico'
        response.succeeded = false
    }
    return response
}