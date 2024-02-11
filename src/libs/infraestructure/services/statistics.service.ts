
import * as CtrlRepository from '../repositories/statistics.repository'

export const GetGeneralStatistics = async ()=>{
    let devices = await CtrlRepository.GeneralStatistics()
    return devices
}