import { Module, HttpModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';

@Module({
  imports: [ItemsModule, HttpModule],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
