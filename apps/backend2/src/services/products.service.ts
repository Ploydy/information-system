import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from '../schemas/product.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: mongoose.Model<Product>
  ) {}

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async create(product: Product): Promise<Product> {
    const newProduct = await this.productModel.create(product);
    return newProduct.save();
  }

  async findById(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    return product;
  }

  async updateById(id: string, product: Product): Promise<Product> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.productModel.findByIdAndUpdate(id, product, {
        new: true,
        runValidators: true,
      });
    }
  }

  async deleteById(id: string, product: Product): Promise<Product> {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return await this.productModel.findByIdAndDelete(id, product);
    }
  }
}
