import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum OfficeFormat {
  MANAGER = 'manager',
  SALESPERSON = 'salesperson',
  CASHIER = 'cashier'
}

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  employee_id: string

  @Column({
    type: 'varchar',
  })
  name: string

  @Column({
    type: 'varchar',
    length: 11,
    unique: true,
  })
  cpf: string

  @Column({
    type: 'enum',
    enum: OfficeFormat,
  })
  office: OfficeFormat

  @Column({
    type: 'date'
  })
  birthday

  @Column({
    type: 'varchar',
    length: 10,
  })
  situation
}