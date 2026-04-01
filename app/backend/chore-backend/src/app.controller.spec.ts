import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { People } from './class/People';

describe('AppController', () => {
  let appController: AppController;

  const dishPeople = [
    new People('Tyson', 1),
    new People('Brynlee', 2),
    new People('Jerilynn/Keslee', 3),
  ];

  const dayPeople = [
    new People('Tristan', 4),
    new People('Brockton', 5),
  ];

  const appServiceMock = {
    getDishChorePeople: jest.fn(),
    getDayChorePeople: jest.fn(),
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    appServiceMock.getDishChorePeople.mockResolvedValue(dishPeople);
    appServiceMock.getDayChorePeople.mockResolvedValue(dayPeople);

    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: AppService,
          useValue: appServiceMock,
        },
      ],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('getDishChoreList', () => {
    it('returns the dish chore people from AppService', async () => {
      await expect(appController.getDishChoreList()).resolves.toBe(dishPeople);
      expect(appServiceMock.getDishChorePeople).toHaveBeenCalledTimes(1);
    });
  });

  describe('getDayChoreList', () => {
    it('returns the day chore people from AppService', async () => {
      await expect(appController.getDayChoreList()).resolves.toBe(dayPeople);
      expect(appServiceMock.getDayChorePeople).toHaveBeenCalledTimes(1);
    });
  });
});
