import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EmployeeController } from "./controllers/employee.controller";
import { Employee } from "./entities/employee.entity";
import { EmployeeRepository } from "./repositories/employee.repository";
import { EmployeeService } from "./services/employee.service";

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository],
})

export class EmployeeModule {}