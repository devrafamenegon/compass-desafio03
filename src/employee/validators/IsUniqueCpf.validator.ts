import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Repository } from "typeorm";
import { Employee } from "../entities/employee.entity";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueCpfConstraint implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(Employee)
    private employeeEntity: Repository<Employee>,
  ) {}

  async validate(value: string): Promise<boolean> {
    try {
      const employeeList = await this.employeeEntity.find();
      const existingEmployee = employeeList.find(e => e.cpf === value);
      return !existingEmployee;
    } catch(error) {
      console.log(error);
      return false;
    }
  }

  defaultMessage(): string {
    return "cpf already exists in database";
  }
}

export function IsUniqueCpf(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUniqueCpfConstraint
    })
  }
}