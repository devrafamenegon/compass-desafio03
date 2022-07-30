import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateEmployeeDTO } from "../../dtos/create-employee";
import { Employee } from "../entities/employee.entity";
import { EmployeeService } from "../services/employee.service";

@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Post()
  create(@Body() employee: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeService.create(employee);
  }
}