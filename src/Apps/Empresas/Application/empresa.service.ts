import * as CtrlRepository from '../Repository/empresa.repository'

export const GetInfoEmpresa = async (idUser: string)=>{
    let empresa = await CtrlRepository.GetInfoEmpresa(idUser)
    return empresa
}
