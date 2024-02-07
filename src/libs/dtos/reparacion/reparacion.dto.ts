
export interface AddReparacionDto{
    fecharecepcion: Date,
    fechaentrega: Date,
    costototal: number,
    idcliente: number
}

export interface CreateReparacionDto{
    nombre: string,
    apellido: string,
    telefono: string,
    email: string,
    fechaentrega: Date,
    costototal: number,
    iddiagnostico: number
}

export interface ReparacionAllDto{
    id: number,
    uuid: string,
    nombre: string, 
    apellido: string,
    telefono: string,
    recepcion: Date,
    entrega: Date,
    modelo: string,
    marca: string,
    falla: string,
    diagnostico: string,
    presupuesto: number,
    total: number
}

export interface CreateReparacionFirstDto{
    nombre: string,
    apellido: string,
    telefono: string,
    fechaentrega: Date,
    costototal: number,
    descripcionfalla:string,
    sugerenciareparacion:string,
    idequipo: number

}