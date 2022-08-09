import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Employee } from "src/employee/entities/employee.entity";
import { Repository } from "typeorm";

@Injectable()
@ValidatorConstraint({ async: true })
export class IsValidEmployeeConstraint implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(Employee)
    private employeeEntity: Repository<Employee>,
  ) {}

  async validate(value: string): Promise<boolean> {
    try {
      const employeeList = await this.employeeEntity.find();
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