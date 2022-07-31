import { ApiProperty } from "@nestjs/swagger";
import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn('uuid')
  product_id: string

  @ApiProperty()
  @Column({
    type: 'varchar',
  })
  name: string

  @ApiProperty()
  @Column({
    type: 'varchar',
  })
  category: string

  @ApiProperty()
  @Column({
    type: 'float',
  })
  price: number

  @ManyToOne(() => Employee, (employee) => employee.products) 
  @JoinColumn({ name: "employee_id" })
  employee: Employee;
}