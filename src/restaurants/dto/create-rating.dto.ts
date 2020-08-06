import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRatingDto {
  readonly id?: number;

  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly emailid: string;

  @IsNumber()
  readonly rating: number;

  @IsNotEmpty()
  readonly restaurantid: string;
}
