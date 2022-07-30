import { PartialType } from "@nestjs/swagger";
import { CreateEmployeeDTO } from "./createEmployee.dto";

export class UpdateEmployeeDTO extends PartialType(CreateEmployeeDTO){}