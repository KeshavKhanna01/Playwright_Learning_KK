// read only keyword: used to make a property immutable after it is initialized

class emp{
    readonly empId: number;

    constructor(empId:number){
        this.empId=empId;
    }
}
const emp1 = new emp(12);
console.log(emp1.empId);
//emp1.empId=200; // throwing error as it is readonly, prevents modification of data, useful for locators, contants and unique identifiers  