import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RocketService } from './Rocket/rocket.service';
import { RocketController } from './Rocket/rocket.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AppController, RocketController],
  providers: [AppService, RocketService],
})
export class AppModule {}
