import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogService } from './dog/dog.service';
import { DogController } from './dog/dog.controller';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [CatModule, DogModule],
  controllers: [AppController, DogController],
  providers: [AppService, DogService],
})
export class AppModule {}
