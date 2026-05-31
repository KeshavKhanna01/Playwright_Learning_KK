//multilevel inheritance: A->B->C
class a{

    print()
    {
    console.log("Data is printing");
    }
}

class b extends a{

    scan()
    {
    console.log("Data is scanned");
    }
}

class c extends b{

    copy()
    {
    console.log("Data is copied");
    }
}

let obj= new c();
obj.scan();
obj.print();
obj.copy();


//hierarchical inheritance 
class emp{
    work(){
        console.log("Employee is working");
    }
}

class dev extends emp{
    code(){
        console.log("Dev is coding");
    }
}

class tester extends emp{
    testing(){
        console.log("Testing in progress");
    }
}


//hybrid inheritance : multileve + hierarchical
class a1{
    work(){
        console.log("Executing Block A1");
    }
}

class a2 extends a1{
    code(){
        console.log("Executing Block A2");
    }
}

class a3 extends a2{
    testing(){
        console.log("Executing Block A3");
    }
}

class a4 extends a2{
    testing(){
        console.log("Executing Block A4");
    }
}




