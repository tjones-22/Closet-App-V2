import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { AppModule } from './../src/app.module';
import { AppService } from './../src/app.service';
import { People } from './../src/class/People';

describe('AppController (e2e)', () => {
  let app: INestApplication;

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
    getDishChorePeople: jest.fn().mockResolvedValue(dishPeople),
    getDayChorePeople: jest.fn().mockResolvedValue(dayPeople),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(appServiceMock)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
 afterEach(async () => {
    jest.clearAllMocks();
    await app.close();
  });

  it('/api/dish (GET)', async () => {
    await request(app.getHttpServer())
      .get('/api/dish')
      .expect(200)
      .expect([
        { name: 'Tyson', id: 1 },
        { name: 'Brynlee', id: 2 },
        { name: 'Jerilynn/Keslee', id: 3 },
      ]);

    expect(appServiceMock.getDishChorePeople).toHaveBeenCalledTimes(1);
  });

  it('/api/day (GET)', async () => {
    await request(app.getHttpServer())
      .get('/api/day')
      .expect(200)
      .expect([
        { name: 'Tristan', id: 4 },
        { name: 'Brockton', id: 5 },
      ]);

    expect(appServiceMock.getDayChorePeople).toHaveBeenCalledTimes(1);
  });
});
