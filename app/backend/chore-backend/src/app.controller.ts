import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { People } from './class/People';

@Controller('/api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/dish')
  async getDishChoreList() {
    const dishArray: People[] = await this.appService.getDishChorePeople();
    console.log('Get Request recognized');
    return dishArray;
  }

  @Get('/day')
  async getDayChoreList() {
    const dayChores: People[] = await this.appService.getDayChorePeople();
    console.log('Get Request recognized');
    return dayChores;
  }
}
