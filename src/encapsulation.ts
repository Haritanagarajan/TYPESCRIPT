class details{
    private _name:string;
    private _age:number;

    public getdata():any{
    console.log(`the name of the person is ${this._name} and age of the person is ${this._age}`);
            }

    public setdata(value:string,value1:number):any{
this._name=value;
this._age=value1;
    }
}
let d= new details();
d.setdata('hari',23);
d.getdata();
