
class People {
    private name:string;
    private dishChore:string;
    private dayChore:string;


    constructor(name:string,dishCore:string,datChore:string){
        this.name = name;
        this.dishChore = dishCore;
        this.dayChore = datChore;
    }

    public getName():string{
        return this.name;
    }

    public getDishChore():string{
        return this.dishChore;
    }

    public getDayChore():string{
        return this.dayChore;
    }

    public setname(name:string):void{
        this.name = name;
    }

    public setDishChore(dishChore:string):void{
        this.dishChore = dishChore;
    }

    public setDayChore(dayChore:string):void{
        this.dayChore = dayChore;
    }
}