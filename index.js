//1.Function Standalon
let myFunc = (x) => {
    alert("Hello " +x+ " from myFunc")
}
myFunc('Onkar')

let myFunc1 = (y) => {
    alert(`Hello ${y} from myFunc1`)
}
myFunc1("Santosh")

//Where can be function exits
//1.Function Standalon
//2.Js Object 2nd member
//3.Inside a Class


//2.Js Object 2nd member

let student1 ={
    name:'Rahul',
    surname:'Patil',

    displayFullName(name){
        alert(`Hello ${this.name} ${this.surname} ,How are you?`)
    },

    display1(name='Aniket'){ //formal argument with default
       alert(`Hello ${name}, Good morning`)
    },
    display2:(name='Pravin') => {
        alert(`Hello ${name}, Good night`)
    }
}
student1.displayFullName()
student1.display1("Yogesh"); //Actual argument
student1.display2();

//3.Inside a Class
//for class use PascalCase

class MyClass{
    //1.Properties/variable
    student2name ="Nilesh";
    student2surname;

    //2.Constructor
     constructor(sname){
        this.student2surname = sname;
     }
    //3.Method
    myFunction3(r){
        alert(`Hi ${this.student2name} ${this.student2surname}, how are you`)
    }

    // myFunction4 = () =>{
    //     alert(`Hi ${this.student2name}, how are you`)
    // }
}
let myObject1 = new MyClass("Talekar");
myObject1.myFunction3();