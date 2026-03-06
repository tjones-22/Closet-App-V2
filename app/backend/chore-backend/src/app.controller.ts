import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { People } from './class/People';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    const dayArray: People[] = await this.appService.getDayChorePeople();
    const dishArray: People[] = await this.appService.getDishChorePeople();

    return {
      day_chores: dayArray,
      dish_chores: dishArray,
    };
  }
}
