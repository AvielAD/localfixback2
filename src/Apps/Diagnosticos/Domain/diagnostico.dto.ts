export interface AddDiagnosticoDto{
    cliente: string,
    descripcionfalla:string,
    sugerenciareparacion:string,
    costopresupuesto: number,
    idequipo: number
}

export interface UpdateDiagnosticoDto{
    id: number,
    descripcionfalla:string,
    sugerenciareparacion:string,

}