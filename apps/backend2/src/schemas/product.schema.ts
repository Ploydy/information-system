import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


export enum ProductCategory {
  ALUMINUM = 1,
  GLASS = 2,
}

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
  category: ProductCategory;
}


export const ProductSchema = SchemaFactory.createForClass(Product)