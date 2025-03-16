import { Address } from 'src/address/address.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Index,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  name: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  @Index()
  createdAt: Date;

  @OneToMany(() => Address, (address) => address.user)
  addresses: string[];
}
