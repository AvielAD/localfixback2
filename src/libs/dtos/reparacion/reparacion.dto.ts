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