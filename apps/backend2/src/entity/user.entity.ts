import { Column, Entity, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullname: string;

  @Column()
  email: string;

  @Column()
  role: string;

  @Column()
  password: string;
}
