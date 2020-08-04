import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './interfaces/restaurant.interface';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  //This Get method is to get zomato restaurant list.
  @Get()
  findAll(): Observable<AxiosResponse<Restaurant[]>> {
    return this.restaurantsService.findAll();
  }

  //This Post method is to post rating of restaurant using required fields.
  @Post()
  create(@Body() createRatingDto: CreateRatingDto): string {
    return `Name: ${createRatingDto.name} Desc: ${createRatingDto.restaurantid}`;
  }

  //This Get method is to get ratings of restaurants using restaurant id as path param.
  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }
}
