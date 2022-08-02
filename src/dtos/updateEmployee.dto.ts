import { ApiProperty, PartialType } from "@nestjs/swagger";
import { IsIn, IsOptional, IsString } from "class-validator";
import { CreateEmployeeDTO } from "./createEmployee.dto";

export class UpdateEmployeeDTO extends PartialType(CreateEmployeeDTO) {
  @ApiProperty({ required: false })
  @IsString()
  @IsIn(['activate', 'deactivate'])
  @IsOptional()
  situation: string
}