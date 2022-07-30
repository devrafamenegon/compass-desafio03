import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsString, MaxDate } from "class-validator";
import { OfficeFormat } from "../entities/employee.entity";

export class CreateEmployeeDTO {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  cpf: string;
  
  @IsEnum(OfficeFormat)
  @IsNotEmpty()
  office: OfficeFormat;
  
  @Type(() => Date)
  @MaxDate(new Date())
  @IsDate()
  @IsNotEmpty()
  birthday: Date;
}