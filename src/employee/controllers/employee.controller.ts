import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiBody, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateEmployeeDTO } from "src/dtos/update-employee.dto";
import { CreateEmployeeDTO } from "../../dtos/create-employee.dto";
import { Employee } from "../entities/employee.entity";
import { EmployeeService } from "../services/employee.service";

@ApiTags('employees')
@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @ApiResponse({ status: 200, description: 'Employee Listing.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }
  
  @ApiParam({ name: 'uuid', type: String })
  @ApiResponse({ status: 200, description: 'Employee Listing.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Get(':uuid')
  findOne(uuid: string): Promise<Employee> {
    return this.employeeService.findOne(uuid);
  }

  @ApiBody({ type: [CreateEmployeeDTO] })
  @ApiResponse({ status: 201, description: 'The Employee was successfully registered.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Post()
  create(@Body() employee: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeService.create(employee);
  }

  @ApiBody({ type: [UpdateEmployeeDTO] })
  @ApiParam({ name: 'uuid', type: String })
  @ApiResponse({ status: 200, description: 'Employee Listing.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Put(':uuid')
  update(@Param() uuid: string, @Body() employee: UpdateEmployeeDTO): Promise<Employee> {
    return this.employeeService.update(uuid, employee);
  }
}