export class People {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setname(name: string): void {
    this.name = name;
  }
}
