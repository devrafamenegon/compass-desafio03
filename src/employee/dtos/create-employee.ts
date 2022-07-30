import { OfficeFormat } from "../entities/employee.entity";

export class CreateEmployeeDTO {
  name: string;
  cpf: string;
  office: OfficeFormat;
  birthday: Date;
  situation: string;
}