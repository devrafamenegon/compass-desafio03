import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { EmployeeRepository } from "src/employee/repositories/employee.repository";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsActiveManagerConstraint implements ValidatorConstraintInterface {
  constructor(private employeeRepository: EmployeeRepository) {}

  async validate(value: string): Promise<boolean> {
    try {
      const employee = await this.employeeRepository.findOne(value);
      if (employee.office == 'manager' && employee.situation == 'activate') return true;
      return false;
    } catch(error) {
      return false;
    }
  }

  defaultMessage(): string {
    return "employee is not a manager or is deactivated.";
  }
}

export function IsActiveManager(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsActiveManagerConstraint
    })
  }
}