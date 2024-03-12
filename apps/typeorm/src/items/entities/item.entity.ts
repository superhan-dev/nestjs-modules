import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string; // uuid

  @Column()
  name: string;

  @Column({ default: true })
  isPublic: boolean;

  constructor(item: Partial<Item>) {
    Object.assign(this, item);
  }
}
