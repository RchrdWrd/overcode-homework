import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './schemas/product.schema';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  async create(createProductDto: CreateProductDto):Promise<Product> {
    const newProduct = new this.productModel(createProductDto);
    return newProduct.save();
  }

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async findOne(id: string):Promise<Product[] | null> {
    return this.productModel.findById(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto):Promise<Product | null> {
    return this.productModel.findByIdAndUpdate(id, updateProductDto, {new: true})
  }

  async remove(id: string):Promise<Product | null> {
    return this.productModel.findByIdAndDelete(id);
  }
}
