import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { People } from './class/People';
import { PeopleArray } from './class/PeopleArray';

@Injectable()
export class AppService {
  private readonly dishChorePeople: PeopleArray;
  private readonly dayChorePeople: PeopleArray;

  constructor() {
    this.dishChorePeople = new PeopleArray(this.buildDishPeople());
    this.dayChorePeople = new PeopleArray(this.buildDayPeople());
  }

  private buildDishPeople(): People[] {
    return [
      new People('Tyson',1),
      new People('Brynlee',2),
      new People('Jerilynn/Keslee',3),
      new People('Tristan',4),
      new People('Dad',5),
      new People('Brockton/Mom',6),
    ];
  }

  private buildDayPeople(): People[] {
    return [
      new People('Tyson',1),
      new People('Brynlee',2),
      new People('Jerilynn/Keslee',3),
      new People('Tristan',4),
      new People('Brockton',5),
    ];
  }

  rotateDishChores(): void {
    this.dishChorePeople.shiftPeople();
  }

  rotateDayChores(): void {
    this.dayChorePeople.shiftPeople();
  }

  async getDishChorePeople(): Promise<People[]> {
    return this.dishChorePeople.getPeopleArray();
  }

  async getDayChorePeople(): Promise<People[]> {
    return this.dayChorePeople.getPeopleArray();
  }

  @Cron('0 0 * * *') // daily
  handleDailyDishRotation(): void {
    this.rotateDishChores();
  }

  @Cron('0 0 * * 0') // weekly
  handleWeeklyDayRotation(): void {
    this.rotateDayChores();
  }
 
}
