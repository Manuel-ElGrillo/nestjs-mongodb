import { Controller, Get, Post, Res, HttpStatus, Body, Param, NotFoundException, Delete, Query, Put } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor( private productService: ProductService ){}

    @Get('/')
    async getAllProducts(@Res() response) {

        const allProducts = await this.productService.getAllProducts();

        return response.status( HttpStatus.OK ).send({
            message: 'Todos los productos',
            allProducts
        })

    }

    @Get('/:id')
    async getOneProduct(@Res() response, @Param('id') id) { // @Param('id') debe ser el mismo del decorador @Get('/:id')

        const product = await this.productService.getOneProduct( id );

        if (!product) {
            throw new NotFoundException('No existe el producto especificado')
        }

        return response.status( HttpStatus.OK ).send({
            message: 'Producto encontrado',
            product
        })
    }

    @Post('create')
    async createProduct(@Res() response, @Body() createProductDTO: CreateProductDTO ) {

        const productCreated = await this.productService.CreateProduct( createProductDTO )

        return response.status( HttpStatus.OK ).send({
            message: 'Product Created',
            productCreated
        })
    }

    @Delete('delete')
    async deleteProduct(@Res() response, @Query('id') id) { //A diferencia del Body o el Param el Query es una consulta tipo: http://localhost/product/delete?id=ajslhcvshcv654s
        
        const deletedProduct = await this.productService.deleteProduct( id )

        if (!deletedProduct) {
            throw new NotFoundException('El producto seleccionado no existe')
        }

        return response.status( HttpStatus.OK ).send({
            message: 'Producto eliminado',
            deletedProduct
        })

    }

    @Put('update')
    async updateProduct(@Res() response, @Body() createProductDTO: CreateProductDTO, @Query('id') id) {

        const updatedProduct = await this.productService.updateProduct( id, createProductDTO );

        if (!updatedProduct) {
            throw new NotFoundException('El producto seleccionado no existe')
        }

        return response.status( HttpStatus.OK ).send({
            message: 'Producto actualizado',
            updatedProduct
        })
    }

    //NOTA
    //@Query es para consultas
    //@Param es para parámetros en una URL

}
