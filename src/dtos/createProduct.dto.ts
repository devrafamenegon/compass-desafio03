import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID } from "class-validator";
import { IsActiveManager } from "src/product/validators/IsActiveManager.validator";
import { IsValidEmployee } from "src/product/validators/IsValidEmployee.validator";

export class CreateProductDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  category: string;

  @ApiProperty()
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty()
  @IsActiveManager()
  @IsValidEmployee()
  @IsUUID()
  @IsNotEmpty()
  employee_id: string;
}