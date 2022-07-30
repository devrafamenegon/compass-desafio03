import { Employee } from "src/employee/entities/employee.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
  price: number

  @ManyToOne(() => Employee, (employee) => employee.products) 
  @JoinColumn({ name: "employee_id" })
  employee: Employee;
}