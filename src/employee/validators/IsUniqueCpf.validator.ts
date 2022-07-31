import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { EmployeeRepository } from "../repositories/employee.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueCpfConstraint implements ValidatorConstraintInterface {
  constructor(private employeeRepository: EmployeeRepository) {}

  async validate(value: string): Promise<boolean> {
    try {
      const employeeList = await this.employeeRepository.findAll();
      const existingEmployee = employeeList.find(e => e.cpf === value);
      return !existingEmployee;
    } catch(error) {
      console.log(error);
      return false;
    }
  }

  defaultMessage(): string {
    return "CPF already exists";
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