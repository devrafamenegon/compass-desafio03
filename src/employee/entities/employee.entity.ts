import { ApiProperty } from "@nestjs/swagger";
import { Product } from "src/product/entities/product.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

export enum OfficeFormat {
  MANAGER = 'manager',
  SALESPERSON = 'salesperson',
  CASHIER = 'cashier'
}

@Entity()
export class Employee {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  employee_id: string

  @ApiProperty()
  @Column({
    type: 'varchar',
  })
  name: string

  @ApiProperty()
  @Column({
    type: 'varchar',
    length: 11,
    unique: true,
  })
  cpf: string

  @ApiProperty()
  @Column({
    type: 'enum',
    enum: OfficeFormat,
  })
  office: OfficeFormat

  @ApiProperty()
  @Column({
    type: 'date'
  })
  birthday: Date

  @ApiProperty()
  @Column({
    type: 'varchar',
    length: 10,
    default: 'activate'
  })
  situation: string

  @OneToMany(() => Product, (product) => product.employee)
  products: Product[];
} 