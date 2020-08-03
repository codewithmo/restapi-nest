import { Module, HttpModule } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';

@Module({
  imports: [HttpModule],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
