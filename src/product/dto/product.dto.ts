//Archivo DTO para decir qué se envia entre el cliente y el 
//Data Transfer Object
export class CreateProductDTO {
    readonly name: string
    readonly decription: string
    readonly imageURL: string
    readonly price: number
    readonly created_at: Date
}