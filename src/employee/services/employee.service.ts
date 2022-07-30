import { Injectable, Query } from "@nestjs/common";
import { CreateEmployeeDTO } from "../../dtos/create-employee";
import { Employee } from "../entities/employee.entity";
import { EmployeeRepository } from "../repositories/employee.repository";

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }

  create(employee: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeRepository.create(employee);
  }
}