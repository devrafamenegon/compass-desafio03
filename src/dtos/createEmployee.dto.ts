import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsAlpha, IsAlphanumeric, IsDate, IsEnum, IsNotEmpty, IsNumberString, IsString, Length, MaxDate } from "class-validator";
import { IsUniqueCpf } from "src/employee/validators/IsUniqueCpf.validator";
import { IsValidBirthday } from "src/employee/validators/IsValidBirthDay.validator";
import { IsValidCpf } from "src/employee/validators/IsValidCpf.validator";
import { OfficeFormat } from "../employee/entities/employee.entity";

export class CreateEmployeeDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @ApiProperty()
  @IsValidCpf()
  @IsUniqueCpf()
  @Length(11)
  @IsNumberString()
  @IsNotEmpty()
  cpf: string;
  
  @ApiProperty({
    enum: OfficeFormat,
  })
  @IsEnum(OfficeFormat)
  @IsNotEmpty()
  office: OfficeFormat;
  
  @ApiProperty()
  @IsValidBirthday()
  @IsString()
  @IsNotEmpty()
  birthday: string;
}