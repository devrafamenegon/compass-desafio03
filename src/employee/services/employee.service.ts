import { Injectable } from "@nestjs/common";
import { UpdateEmployeeDTO } from "../../dtos/updateEmployee.dto";
import { CreateEmployeeDTO } from "../../dtos/createEmployee.dto";
import { Employee } from "../entities/employee.entity";
import { EmployeeRepository } from "../repositories/employee.repository";

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.findAll();
  }

  findOne(uuid: string): Promise<Employee> {
    return this.employeeRepository.findOne(uuid);
  }

  create(employee: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeRepository.create(employee);
  }

  update(uuid: string, employee: UpdateEmployeeDTO): Promise<Employee> {
    return this.employeeRepository.update(uuid, employee);
  }

  delete(uuid: string): Promise<void> {
    return this.employeeRepository.delete(uuid);
  }
}