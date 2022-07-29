import { Module } from "@nestjs/common";
import { EmployeeController } from "./controllers/employee.controller";
import { EmployeeService } from "./services/employee.service";

@Module({
  controllers: [EmployeeController],
  providers: [EmployeeService],
})

export class EmployeeModule {}