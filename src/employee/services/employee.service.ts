import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UpdateEmployeeDTO } from "../../dtos/updateEmployee.dto";
import { CreateEmployeeDTO } from "../../dtos/createEmployee.dto";
import { Employee } from "../entities/employee.entity";
import { EmployeeRepository } from "../repositories/employee.repository";
import { ProductRepository } from "src/product/repositories/product.repository";

@Injectable()
export class EmployeeService {
  constructor(private readonly employeeRepository: EmployeeRepository, 
    private readonly productRepository: ProductRepository) {}

  async findAll(): Promise<Employee[]> {
    const findedEmployees = await this.employeeRepository.findAll();
    if (!findedEmployees) {
      throw new BadRequestException(`A contact error has occurred.`);
    }
    return findedEmployees;
  }

  async findOne(uuid: string): Promise<Employee> {
    const findedEmployee = await this.employeeRepository.findOne(uuid);;
    if (!findedEmployee) {
      throw new NotFoundException(`Employee with uuid ${uuid} not found`);
    }
    return findedEmployee;
  }

  async create(employee: CreateEmployeeDTO): Promise<Employee> {
    const createdEmployee = await this.employeeRepository.create(employee);
    if (!createdEmployee) {
      throw new BadRequestException(`A contact error has occurred.`);
    }
    return createdEmployee;
  }

  update(uuid: string, employee: UpdateEmployeeDTO): Promise<Employee> {
    return this.employeeRepository.update(uuid, employee);
  }

  async delete(uuid: string): Promise<void> {
    const findedUser = await this.employeeRepository.findOne(uuid);
    const isReferenced = await this.productRepository.findByEmployee(uuid);

    if (!findedUser) {
      throw new NotFoundException(`Employee with uuid ${uuid} not found`);
    }

    if (isReferenced) {
      throw new BadRequestException(`Employee with uuid ${uuid} is referenced in one or more products`);
    }

    return this.employeeRepository.delete(uuid);
  }
}