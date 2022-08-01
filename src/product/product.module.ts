import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "src/employee/entities/employee.entity";
import { EmployeeRepository } from "src/employee/repositories/employee.repository";
import { ProductController } from "./controllers/product.controller";
import { Product } from "./entities/product.entity";
import { ProductRepository } from "./repositories/product.repository";
import { ProductService } from "./services/product.service";
import { IsActiveManagerConstraint } from "./validators/IsActiveManager.validator";
import { IsValidEmployeeConstraint } from "./validators/IsValidEmployee.validator";

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    TypeOrmModule.forFeature([Employee])
  ],
  controllers: [ProductController],
  providers: [ProductService, ProductRepository, EmployeeRepository, IsValidEmployeeConstraint, IsActiveManagerConstraint],
})

export class ProductModule {}