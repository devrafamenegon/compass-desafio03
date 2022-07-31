import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNotEmpty, IsString, MaxDate } from "class-validator";
import { IsUniqueCpf } from "src/employee/validators/IsUniqueCpf.validator";
import { OfficeFormat } from "../employee/entities/employee.entity";

export class CreateEmployeeDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @ApiProperty()
  @IsUniqueCpf()
  @IsString()
  @IsNotEmpty()
  cpf: string;
  
  @ApiProperty({
    enum: OfficeFormat,
  })
  @IsEnum(OfficeFormat)
  @IsNotEmpty()
  office: OfficeFormat;
  
  @ApiProperty()
  @Type(() => Date)
  @MaxDate(new Date())
  @IsDate()
  @IsNotEmpty()
  birthday: Date;
}