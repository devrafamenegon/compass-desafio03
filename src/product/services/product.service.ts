import { Injectable } from "@nestjs/common";
import { CreateProductDTO } from "src/dtos/createProduct.dto";
import { UpdateProductDTO } from "../../dtos/updateProduct.dto";
import { Product } from "../entities/product.entity";
import { ProductRepository } from "../repositories/product.repository";

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  findAll(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  findOne(uuid: string): Promise<Product> {
    return this.productRepository.findOne(uuid);
  }

  create(product: CreateProductDTO): Promise<Product> {
    return this.productRepository.create(product);
  }
}