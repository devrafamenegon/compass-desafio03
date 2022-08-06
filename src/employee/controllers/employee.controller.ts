import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put, Query, UseInterceptors } from "@nestjs/common";
import { ApiBody, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UpdateEmployeeDTO } from "../../dtos/updateEmployee.dto";
import { CreateEmployeeDTO } from "../../dtos/createEmployee.dto";
import { Employee } from "../entities/employee.entity";
import { EmployeeService } from "../services/employee.service";
import { ResponseTransformerInterceptor } from "../interceptors/responseTransformer.interceptor";
import { QueryParamsDTO } from "src/dtos/queryParams.dto";

@ApiTags('employees')
@UseInterceptors(ResponseTransformerInterceptor)
@Controller('api/v1/employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}
  
  @ApiResponse({ status: 200, description: 'Employee Listing.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Get()
  findAll(@Query() query: QueryParamsDTO): Promise<Employee[]> {
    return this.employeeService.findAll(query);
  }

  @ApiParam({ name: 'uuid', type: String })
  @ApiResponse({ status: 200, description: 'Employee Listing.'})
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Get(':uuid')
  findOne(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<Employee> {
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
  update(@Param('uuid', ParseUUIDPipe) uuid: string, @Body() employee: UpdateEmployeeDTO): Promise<Employee> {
    return this.employeeService.update(uuid, employee);
  }

  @ApiParam({ name: 'uuid', type: String })
  @ApiResponse({ status: 204 })
  @ApiResponse({ status: 400, description: 'A contact error has occurred.'})
  @Delete(':uuid')
  delete(@Param('uuid', ParseUUIDPipe) uuid: string): Promise<void> {
    return this.employeeService.delete(uuid);
  }
}