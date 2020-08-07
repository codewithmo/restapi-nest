import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsNumberString,
} from 'class-validator';

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
  @IsNumberString()
  readonly restaurantid: string;
}
