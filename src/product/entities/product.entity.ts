import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  product_id: string

  @Column({
    type: 'varchar',
  })
  name: string

  @Column({
    type: 'varchar',
  })
  category: string

  @Column({
    type: 'float',
  })
  office: number

  @ManyToOne(type => Employee, employee => employee.products) 
  employee: Employee;
}