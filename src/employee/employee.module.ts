import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "src/product/entities/product.entity";
import { ProductRepository } from "src/product/repositories/product.repository";
import { EmployeeController } from "./controllers/employee.controller";
import { Employee } from "./entities/employee.entity";
import { EmployeeRepository } from "./repositories/employee.repository";
import { EmployeeService } from "./services/employee.service";
import { IsUniqueCpfConstraint } from "./validators/IsUniqueCpf.validator";

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Product])],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository, ProductRepository, IsUniqueCpfConstraint],
})

export class EmployeeModule {}