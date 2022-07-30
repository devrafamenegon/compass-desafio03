import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UpdateEmployeeDTO } from "src/dtos/update-employee.dto";
import { Repository } from "typeorm";
import { CreateEmployeeDTO } from "../../dtos/create-employee.dto";
import { Employee } from "../entities/employee.entity";

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectRepository(Employee)
    private employeeEntity: Repository<Employee>,
  ) {}

  async findAll(): Promise<Employee[]> {
    return await this.employeeEntity.find();
  }

  async findOne(uuid: string): Promise<Employee> {
    return await this.employeeEntity.findOne({ where: {employee_id: uuid}});
  }

  async create(employee: CreateEmployeeDTO): Promise<Employee> {
    return await this.employeeEntity.save(employee);
  }

  async update(uuid: string, employee: UpdateEmployeeDTO): Promise<Employee> {
    await this.employeeEntity.update(uuid, employee);
    return await this.employeeEntity.findOne({ where: {employee_id: uuid}});
  }

}