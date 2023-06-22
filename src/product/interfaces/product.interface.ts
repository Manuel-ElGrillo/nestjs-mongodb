//Interfaz para ayudar a TS a escribir nuestro codigo
export interface ProductInterface {
    name: string;
    description: string;
    imageURL: string;
    price: number;
    createdAt: Date
}