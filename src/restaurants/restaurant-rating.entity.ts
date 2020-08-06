import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestaurantRating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  emailid: string;

  @Column({ type: 'float4', nullable: true })
  rating: number;

  @Column()
  restaurantid: string;
}
