import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsIn, IsOptional, IsString } from "class-validator";
import { OfficeFormat } from "src/employee/entities/employee.entity";

export class QueryParamsDTO {
  @ApiProperty({ required: false })
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  cpf: string;

  @ApiProperty({
    required: false,
    enum: OfficeFormat,
  })
  @IsEnum(OfficeFormat)
  @IsOptional()
  office: OfficeFormat;

  @ApiProperty({ required: false })
  @IsOptional()
  birthday: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsIn(['activate', 'deactivate'])
  @IsOptional()
  situation: string
}