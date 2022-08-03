import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDTO } from "src/dtos/createProduct.dto";
import { Product } from "../entities/product.entity";
import { ProductRepository } from "../repositories/product.repository";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  async findOne(uuid: string): Promise<Product> {
    const findedProduct = await this.productRepository.findOne(uuid);
    if (!findedProduct) {
      throw new NotFoundException(`Product with uuid ${uuid} not found`);
    }
    return findedProduct;
  }

  create(product: CreateProductDTO): Promise<Product> {
    return this.productRepository.create(product);
  }
}