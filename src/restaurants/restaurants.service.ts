import { Injectable, HttpService } from '@nestjs/common';
import { Restaurant } from './interfaces/restaurant.interface';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import config from './config/keys';

@Injectable()
export class RestaurantsService {
  constructor(private httpService: HttpService) {}

  startCount = 20;
  rawApi: Observable<AxiosResponse<Restaurant[]>> = this.httpService
    .get(
      `https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city&start=${this.startCount}`,
      {
        headers: {
          'user-key': `${config.zomatoKey}`,
          Accept: 'Aplication/json',
        },
      },
    )
    .pipe(map(response => response.data.restaurants));

  findAll(): Observable<AxiosResponse<Restaurant[]>> {
    return this.rawApi;
  }
}
