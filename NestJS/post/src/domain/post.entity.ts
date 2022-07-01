import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

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
}
