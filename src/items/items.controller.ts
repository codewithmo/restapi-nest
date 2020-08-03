import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Observable<AxiosResponse<Item[]>> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    return `Item ${id}`;
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name} Desc: ${createItemDto.description}`;
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`;
  }

  @Put(':id')
  update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
    return `Update ${id}- Name: ${updateItemDto.name}`;
  }
}
