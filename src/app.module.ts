import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductModule, 
    MongooseModule.forRoot('Your MongoDB URL'), //Conectandome a la DB
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
