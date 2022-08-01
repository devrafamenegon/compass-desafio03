import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { EmployeeRepository } from "src/employee/repositories/employee.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsValidEmployeeConstraint implements ValidatorConstraintInterface {
  constructor(private employeeRepository: EmployeeRepository) {}

  async validate(value: string): Promise<boolean> {
    try {
      const employeeList = await this.employeeRepository.findAll();
      const existingEmployee = employeeList.find(e => e.employee_id === value);
      return !!existingEmployee;
    } catch(error) {
      console.log(error);
      return false;
    }
  }

  defaultMessage(): string {
    return "employee not found.";
  }
}

export function IsValidEmployee(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidEmployeeConstraint
    })
  }
}