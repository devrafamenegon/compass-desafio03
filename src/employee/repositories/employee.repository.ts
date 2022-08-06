import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryParamsDTO } from "src/dtos/queryParams.dto";
import { UpdateEmployeeDTO } from "src/dtos/updateEmployee.dto";
import { Repository } from "typeorm";
import { CreateEmployeeDTO } from "../../dtos/createEmployee.dto";
import { Employee } from "../entities/employee.entity";

@Injectable()
export class EmployeeRepository {
  constructor(
    @InjectRepository(Employee)
    private employeeEntity: Repository<Employee>,
  ) {}

  async findAll(query: QueryParamsDTO): Promise<Employee[]> {
    const { name, cpf, office, birthday, situation } = query;

    const queryBuilder = this.employeeEntity.createQueryBuilder('employee');

    if (name) {
      queryBuilder.andWhere('employee.name LIKE :name', { name: `%${name}%` });
    }

    if (cpf) {
      queryBuilder.andWhere('employee.cpf LIKE :cpf', { cpf: `%${cpf}%` });
    }

    if (office) {
      queryBuilder.andWhere('employee.office = :office', { office } );
    }

    if (birthday) {
      queryBuilder.andWhere('employee.birthday LIKE :office', { birthday: `%${birthday}%` } );
    }

    if (situation) {
      queryBuilder.andWhere('employee.situation = :situation', { situation } );
    }

    const employees = await queryBuilder.getMany();
    return employees;
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

  async delete(uuid: string): Promise<void> {
    await this.employeeEntity.delete({ employee_id: uuid });
  }
}