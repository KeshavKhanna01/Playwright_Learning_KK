//public access modifier: accesible inside the class, child class and outside the class
class student{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    public display(){
        console.log("The name is: "+ this.name);
    }
}
const student1 = new student("Harry");
console.log(student1.name);
student1.display();

//private access modifier accesible inside the class only, can use getter and setter for more 
class bank{
    private balance : number;
    constructor(initialBalance:number){
        this.balance= initialBalance;
    }
    public deposit(amount:number){
        this.balance+= amount;
    }
    
    public showBalance(){
        console.log("This is your current balance: " + this.balance);
    }
}
const bank1 = new bank(5500);
bank1.deposit(1000);//encapsulation
bank1.showBalance();//encapsulation
// console.log(bank1.balance);// shows error as it is private 


//protected access modifier accesible inside the class and child class but not outside the class, can use getter and setter for more 
class employee{

    protected salary:number;

    constructor(salary:number){
        this.salary=salary;
    }
}

class manager extends employee{
    showSalary(){
        console.log("Employee's salary is: " + this.salary);
    }
}

const manager1= new manager(20000);
manager1.showSalary();
//console.log(manager1.salary);// shows error as it is private 



//getter method: get the data - read private data
//setter method: set the data - update private data

class emp{
    private salary1:number;

    constructor(salary:number){
        this.salary1=salary;
    }

    getSalary(){
        return this.salary1;
    }

    setSalary(amount:number){
        if(amount>0){
            this.salary1 = amount;
        }else{
            console.log("Invalid Salary");
        }
    }
}
const emp1 = new emp(50000);
console.log(emp1.getSalary());
emp1.setSalary(65000);
console.log(emp1.getSalary());