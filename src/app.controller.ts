import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  @Render('index')
  root() {
    return {
      data: {
        title: 'Chattings',
        copyright: 'name',
      },
    };
  }


  @Get("service")
  getHello(): string {
    return this.appService.getHello();
  }
}
