import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './interfaces/restaurant.interface';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  findAll(): Observable<AxiosResponse<Restaurant[]>> {
    return this.restaurantsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto): string {
    return `Name: ${createRestaurantDto.name} Desc: ${createRestaurantDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(
    @Body() updateRestaurantDto: CreateRestaurantDto,
    @Param('id') id,
  ): string {
    return `Update ${id}- Name: ${updateRestaurantDto.name}`;
  }
}
