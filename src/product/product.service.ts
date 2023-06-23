import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.schema';
import { Model } from 'mongoose';
import { ProductInterface } from './interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private productDocument: Model<ProductDocument>){}

    async getAllProducts(): Promise<ProductDocument[]> {
        //Consultando a MongoDB
        const allProducts = await this.productDocument.find();
        return allProducts;
    }

    async getOneProduct(id: string): Promise<ProductDocument> {
        const product = await this.productDocument.findById( id );
        return product;
    }
    
    async CreateProduct( createProductDTO: CreateProductDTO ): Promise<ProductDocument> {
        const newProduct = new this.productDocument( createProductDTO );
        await newProduct.save();
        return newProduct;
    }

    async deleteProduct( id: string): Promise<ProductDocument> {
        return await this.productDocument.findByIdAndDelete( id );
    }

    async updateProduct( id: string, createProductDTO: CreateProductDTO): Promise<ProductDocument> {
        return await this.productDocument.findByIdAndUpdate(id, createProductDTO,{new: true}); 
        // {new: true} retorna el objeto actualizado y no como estaba antes el objeto con las propiedades anteriores... Valga la redundancia. 😅
    }
}
