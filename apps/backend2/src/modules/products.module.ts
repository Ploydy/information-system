import { Module } from '@nestjs/common';
import { ProductsController } from '../controllers/products.controller';
import { ProductService } from '../services/products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../schemas/product.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema}])],
  controllers: [ProductsController],
  providers: [ProductService]
})
export class ProductsModule {}
