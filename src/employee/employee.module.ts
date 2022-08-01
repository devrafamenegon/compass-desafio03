import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeController } from "./controllers/employee.controller";
import { Employee } from "./entities/employee.entity";
import { EmployeeRepository } from "./repositories/employee.repository";
import { EmployeeService } from "./services/employee.service";
import { IsUniqueCpfConstraint } from "./validators/IsUniqueCpf.validator";

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository, IsUniqueCpfConstraint],
})

export class EmployeeModule {}