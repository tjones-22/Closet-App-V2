export class People {
  private name: string;
  private id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }

  public getName(): string {
    return this.name;
  }

  public setname(name: string): void {
    this.name = name;
  }
  
  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }
}
