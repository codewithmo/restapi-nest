import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class RestaurantRating {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  emailid: string;

  @Column()
  rating: number;

  @Column()
  restaurantid: string;
}
