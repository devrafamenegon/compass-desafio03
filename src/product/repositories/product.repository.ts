import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductDTO } from "src/dtos/createProduct.dto";
import { UpdateProductDTO } from "src/dtos/updateProduct.dto";
import { Repository } from "typeorm";
import { Product } from "../entities/product.entity";

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(Product)
    private productEntity: Repository<Product>,
  ) {}
  
  async findAll(): Promise<Product[]> {
    return await this.productEntity.find();
  }

  async findOne(uuid: string): Promise<Product> {
    return await this.productEntity.findOne({ where: {product_id: uuid}});
  }
  
  async findByEmployee(employeeId: string): Promise<Product> {
    return await this.productEntity.findOne({ where: { employee_id: employeeId }});
  }

  async create(product: CreateProductDTO): Promise<Product> {
    return await this.productEntity.save(product);
  }
}