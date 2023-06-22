import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule, 
    //Reemplazar userName, password y dbName
    MongooseModule.forRoot('mongodb+srv://sdeleonmanuel:GG9gXiIOAI8c03nT@nestjs-mongodb.urpbhiw.mongodb.net/?retryWrites=true&w=majority'), //Conectandome a la DB
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
