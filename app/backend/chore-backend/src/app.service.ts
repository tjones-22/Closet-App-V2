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
      new People('Tyson'),
      new People('Brynlee'),
      new People('Jerilynn/Keslee'),
      new People('Tristan'),
      new People('Dad'),
      new People('Brockton/Mom'),
    ];
  }

  private buildDayPeople(): People[] {
    return [
      new People('Tyson'),
      new People('Brynlee'),
      new People('Jerilynn/Keslee'),
      new People('Tristan'),
      new People('Brockton'),
    ];
  }

  rotateDishChores(): void {
    this.dishChorePeople.shiftPeople();
  }

  rotateDayChores(): void {
    this.dayChorePeople.shiftPeople();
  }

  getDishChorePeople(): People[] {
    return this.dishChorePeople.getPeopleArray();
  }

  getDayChorePeople(): People[] {
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
