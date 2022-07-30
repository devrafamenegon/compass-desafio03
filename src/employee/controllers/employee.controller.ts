import { Body, Controller, Get, Post, Put } from "@nestjs/common";
import { UpdateEmployeeDTO } from "src/dtos/update-employee.dto";
import { CreateEmployeeDTO } from "../../dtos/create-employee.dto";
import { Employee } from "../entities/employee.entity";
import { EmployeeService } from "../services/employee.service";

@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':uuid')
  findOne(uuid: string): Promise<Employee> {
    return this.employeeService.findOne(uuid);
  }

  @Post()
  create(@Body() employee: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @Put(':uuid')
  update(uuid: string, @Body() employee: UpdateEmployeeDTO): Promise<Employee> {
    return this.employeeService.update(uuid, employee);
  }
}