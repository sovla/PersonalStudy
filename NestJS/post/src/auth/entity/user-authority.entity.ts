import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('user_authority')
export class UserAuthority {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['ROLE_ADMIN', 'ROLE_USER'],
    default: 'ROLE_USER',
  })
  authorityName: 'ROLE_ADMIN' | 'ROLE_USER';

  @ManyToOne((type) => User, (user) => user.authorities)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
