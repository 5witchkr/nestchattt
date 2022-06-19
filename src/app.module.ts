import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule.forRoot({
    //use all module
    isGlobal: true
  }),
  //import mongoose
  MongooseModule.forRoot(process.env.MONGO_URL, {
    //todo session 4-2
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
//todo mongodb debug
export class AppModule {}
