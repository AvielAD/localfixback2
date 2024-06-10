
import { ServerResponseDTO } from '../../../Domain/ServerResponse/ServerResponse.dto'
import { AddDiagnosticoDto, UpdateDiagnosticoDto } from '../Domain/diagnostico.dto'
import * as CtrlRepository from '../Infrastructure/diagnostico.repository'

export const GetDiagnosticos = async (idUser: string)=>{
    let devices = await CtrlRepository.GetDiagnosticos(idUser)
    return devices
}

export const AddDiagnostico = async (diagnostico: AddDiagnosticoDto, idUser: string)=> {
    const response = {} as ServerResponseDTO
    let responseDiagnostico = await CtrlRepository.AddDiagnostico(diagnostico, idUser)

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

export const UpdateDiagnostico = async (diagnostico: UpdateDiagnosticoDto, idUser: string)=> {
    const response = {} as ServerResponseDTO
    let responseDiagnostico = await CtrlRepository.UpdateDiagnostico(diagnostico, idUser)

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