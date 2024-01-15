
import * as CtrlRepository from '../repositories/device.repository'

export const GetDevices = async ()=>{
    let devices = await CtrlRepository.GetDevices()
    return devices
}