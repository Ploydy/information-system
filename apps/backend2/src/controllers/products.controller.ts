import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from '../services/products.service';
import { Product } from '../schemas/product.schema';
import { CreateProductDto, UpdateProductDto } from '@information-system/mylib';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProducts(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async getProduct(
    @Param('id')
    id: string
  ): Promise<Product> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return this.productService.findById(id);
    }
  }

  @Post('new')
  async createProduct(
    @Body()
    product: CreateProductDto
  ): Promise<Product> {
    return this.productService.create(product);
  }

  @Put(':id')
  async updateProduct(
    @Param('id')
    id: string,
    @Body()
    product: UpdateProductDto
  ): Promise<Product> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return this.productService.updateById(id, product);
    }
  }

  @Delete(':id')
  async deleteProduct(
    @Param('id')
    id: string,
    product: Product
  ): Promise<Product> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      try {
        return this.productService.deleteById(id, product);
      } catch (error) {
        console.log(error);
        throw new Error('Product deletion failed');
      }
    }
  }
}
