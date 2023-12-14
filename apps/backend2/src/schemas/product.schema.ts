import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

/* 
export enum Category {
  ALUMINUM = 'Aluminum',
  GLASS = 'Glass'

} */

@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  category: string;
}


export const ProductSchema = SchemaFactory.createForClass(Product)