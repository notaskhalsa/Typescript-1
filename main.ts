export{}

let message = 'welcome back to world';
console.log(message);

let x = 10;
const y = 20;

let sum;

const title = 'main.ts';

let isbeginner : boolean = true;
let total : number = 0;
let name : string = 'Arshdeep Singh';

let sentence : string = `My name is ${name}
I am still a beginner to typescript`;

let n: null = null;

let u: undefined = undefined ;

let guess: boolean = null;

let myName: string = undefined;
console.log(sentence);

let list1 : number[] = [1,2,3];
let list2 : Array<number> = [4,5,6];

let person: [string, number] = ['yes',1, ];

enum color{red=10, blue, green}

let c: color = color.blue;

let temp: any = 10;
temp =true;
temp= 'arshdeep';

let multitype: number | boolean;
multitype = 10;
multitype =true;

function add(num1:number, num2:number = 10){
    if(num2){
        return num1+num2;
    }else 
        return num1;
}

add(4,2); 
add(5); /// the optional parameters always comes after defiend parameters

interface person{
    firstName:string,
    lastName: string
};

function fullName(person){
    console.log(`${person.firstName} ${person.lastName}`)
};

class employee{
    employeeName: string;

    constructor(name:string){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good morning ${this.employeeName}`);
    }
}

let emp1 = new employee('Arshdeep');
emp1.greet();

class Manager extends employee{
    constructor(managerName: string){
        super(managerName);
    } 
    delegateWork(){
        console.log(`Manager delegating tasks`);
    }
}

let m1= new Manager('bruce');
m1.delegateWork();
m1.greet();

let p = {
    firstName:'steve',
    lastName:'rogers'
};

fullName(p);