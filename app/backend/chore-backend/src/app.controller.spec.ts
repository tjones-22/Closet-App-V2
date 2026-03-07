import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScheduleModule } from '@nestjs/schedule';




describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ScheduleModule.forRoot()],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    
    it('Will return an object with 2 keys with the chore arrays.', async () => {
      let result = await appController.getPeople();
      expect(result).toHaveProperty('day_chores' );
      expect(result).toHaveProperty('dish_chores');
      expect(Array.isArray(result.day_chores)).toBe(true);
      expect(Array.isArray(result.dish_chores)).toBe(true);
    });
  });
});
