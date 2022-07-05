import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @Column('text')
  image: string;

  @Column('timestamp')
  date: Timestamp;

  @ManyToOne((type) => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne((type) => User, (user) => user.username)
  @JoinColumn({ name: 'user_name' })
  username: User;
}
