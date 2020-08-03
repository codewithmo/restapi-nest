import { Injectable, HttpService } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { response } from 'express';
import { map } from 'rxjs/operators';

@Injectable()
export class ItemsService {
  constructor(private httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<Item[]>> {
    return this.httpService
      .get(
        'https://developers.zomato.com/api/v2.1/search?entity_id=1&entity_type=city',
        {
          headers: {
            'user-key': '75a3ac821af225e8dca370efc70dd7a2',
            Accept: 'Application/json',
          },
        },
      )
      .pipe(map(response => response.data));
  }
}
