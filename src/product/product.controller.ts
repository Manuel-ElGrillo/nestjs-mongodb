import { Controller, Get, Post, Res, HttpStatus, Body } from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {

    @Get()
    getAllProducts() {

    }

    @Post('create')
    createProduct(@Res() response, @Body() createProductDTO: CreateProductDTO ) {
        return response.status( HttpStatus.OK ).send({
            message: 'Todo bien',
            createProductDTO
        })
    }

}
