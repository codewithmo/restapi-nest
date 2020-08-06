import {
  Injectable,
  HttpService,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Repository } from 'typeorm';
import config from './config/keys';
import { RestaurantRating } from './restaurant-rating.entity';
import { CreateRatingDto } from './dto/create-rating.dto';
import { Restaurant } from './interfaces/restaurant.interface';
import {
  paginate,
  Pagination,
  IPaginationOptions,
} from 'nestjs-typeorm-paginate';

@Injectable()
export class RestaurantsService {
  constructor(
    private httpService: HttpService,
    @InjectRepository(RestaurantRating)
    private restaurantRatingRepository: Repository<RestaurantRating>,
  ) {}

  // method for pagination
  async paginate(
    options: IPaginationOptions,
  ): Promise<Pagination<RestaurantRating>> {
    const queryBuilder = this.restaurantRatingRepository.createQueryBuilder(
      'c',
    );
    return paginate<RestaurantRating>(queryBuilder, options);
  }

  // This is fetching zomato's list of restaurants

  //Service method to return a get request for zomato's list of restaurants
  findAll(page: number): Observable<AxiosResponse<Restaurant[]>> {
    page--;
    let startCount: number = 0;
    startCount = 20 * page;
    let rawApi: Observable<AxiosResponse<Restaurant[]>> = this.httpService
      .get(
        `https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&start=${startCount}`,
        {
          headers: {
            'user-key': `${config.zomatoKey}`,
            Accept: 'Aplication/json',
          },
        },
      )
      .pipe(map(response => response.data.restaurants));
    return rawApi;
  }

  //Creating restaurant rating in database via post method by user
  async createUserRating(createRatingDto: CreateRatingDto) {
    const newRating = this.restaurantRatingRepository.create(createRatingDto);
    let ratingRange = createRatingDto.rating;
    if (ratingRange >= 0.0 && ratingRange <= 5.0) {
      await this.restaurantRatingRepository.save(newRating);
      return newRating;
    }
    throw new HttpException('Rating limit is 0-5', HttpStatus.BAD_REQUEST);
  }

  //User can fetch all restaurants rating via get method
  getAllRatings() {
    return this.restaurantRatingRepository.find();
  }

  //User can fetch restaurant ratings via get method with path param as restaurant id
  async getRatingById(id: string) {
    const result: Restaurant[] = await this.restaurantRatingRepository.find({
      restaurantid: id,
    });
    if (result) {
      return result;
    }
    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }
}
