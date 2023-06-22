import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

//Archivo Schema para guardar en la BBDD de MongoDB
export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  imageURL: string;

  @Prop()
  price: number;

  @Prop()
  created_at: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);