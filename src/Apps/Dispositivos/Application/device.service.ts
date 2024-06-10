
import * as CtrlRepository from '../Infrastructure/device.repository'

export const GetDevices = async ()=>{
    let devices = await CtrlRepository.GetDevices()
    return devices
}