 abstract class student1{
   public name: string;
   public age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    public abstract disp():any;
    }
     class student2 extends student1{
     constructor(name:string,age:number){
            super(name,age);
             }
         disp():void{
            console.log(`the name of the person is ${this.name} and age of the person is ${this.age}`);
         }
         }
         var s2=new student2('hari',71);
         s2.disp();
         class student3 extends student2{
            constructor(name:string,age:number){
                   super(name,age);
                    }
                disp():any{
                   console.log(`the name of the person is ${this.name} and age of the person is ${this.age}`);
                }
                }

                // var s1=new student1(harita,21);
                var s3=new student3('rani',11);
                s3.disp();