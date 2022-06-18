import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({
    //use all module
    isGlobal: true
  }),
  //todo import mongoose
],
  controllers: [AppController],
  providers: [AppService],
})
//todo mongodb debug
export class AppModule {}
