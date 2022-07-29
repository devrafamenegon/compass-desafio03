import { Controller, Post } from "@nestjs/common";
import { EmployeeService } from "../services/employee.service";

@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {

  }
  @Post()
  create() {
    return this.employeeService.create();
  }
}