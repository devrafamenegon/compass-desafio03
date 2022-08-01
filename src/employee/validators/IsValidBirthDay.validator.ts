import { Injectable } from "@nestjs/common";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";

@Injectable()
@ValidatorConstraint()
export class IsValidBirthdayConstraint implements ValidatorConstraintInterface {
  validate(value: string): boolean {
    let birthday = value.trim();
    let date = birthday.split('/');

    let day = date[0];
    let month = date[1];
    let year = date[2];

    if (day.length !== 2 || month.length !== 2 || year.length !== 4) {
      return false;
    }

    let numberday = parseInt(date[0]);
    let numbermonth = parseInt(date[1]);
    let numberyear = parseInt(date[2]);

    if (numberday < 1 || numberday > 31) {
      return false;
    }

    if (numbermonth < 1 || numbermonth > 12) {
      return false;
    }

    if (numberyear < 1900 || numberyear >= new Date().getFullYear()) {
      return false;
    }

    return true;
  }

  defaultMessage(): string {
    return "birthday is not valid. Format accept is 'DD/MM/YYYY";
  }
}

export function IsValidBirthday(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsValidBirthdayConstraint
    })
  }
}