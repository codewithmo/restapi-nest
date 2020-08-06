import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { RestaurantsService } from './restaurants.service';
import { Restaurant } from './interfaces/restaurant.interface';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { RestaurantRating } from './restaurant-rating.entity';
import { Pagination } from 'nestjs-typeorm-paginate';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  //This Get method is to get zomato restaurant list.
  @Get()
  findAll(
    @Query('page') page: number,
  ): Observable<AxiosResponse<Restaurant[]>> {
    return this.restaurantsService.findAll(page);
  }

  //This Post method is to post rating of restaurant using required fields.
  @Post('rating')
  async create(@Body() createRatingDto: CreateRatingDto): Promise<Restaurant> {
    const result = await this.restaurantsService.createUserRating(
      createRatingDto,
    );
    return result;
  }

  //This is pagination for ratings from db
  @Get('ratings')
  async index(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<Pagination<RestaurantRating>> {
    limit = limit > 100 ? 100 : limit;
    return this.restaurantsService.paginate({
      page,
      limit,
      route: 'http://localhost:3000/restaurants/ratings',
    });
  }

  //This Get method is to get rating of restaurants
  @Get('ratings')
  async findAllRatings(): Promise<Restaurant[]> {
    return await this.restaurantsService.getAllRatings();
  }

  //This Get method is to get ratings of restaurants using restaurant id as path param.
  @Get('rating/:res_id')
  async findOne(@Param('res_id') id: string): Promise<Restaurant[]> {
    return await this.restaurantsService.getRatingById(id);
  }
}
