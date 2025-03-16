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

  @Index() // name 컬럼에 인덱스 추가
  @Column()
  name: string;

  @Index() // name 컬럼에 인덱스 추가
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Address, (address) => address.user)
  addresses: string[];
}
