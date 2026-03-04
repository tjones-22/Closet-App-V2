import { People } from './People';
export class PeopleArray {
  private peopleArray: People[] = [];
  constructor(people: People[]) {
    this.peopleArray = people;
  }
  
  public addPerson(person: People): void {
    this.peopleArray.push(person);
  }
  public shiftPeople(): People[] {
    let firstElement = this.peopleArray.shift();

    if (firstElement == undefined) {
      console.log('array is empty');
      return this.peopleArray;
    }

    this.peopleArray.push(firstElement);

    return this.peopleArray;
  }
  public getPeopleArray(): People[] {
    return this.peopleArray;
  }

}
