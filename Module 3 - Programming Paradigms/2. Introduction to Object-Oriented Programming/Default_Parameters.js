class WithDefaultParams {

    constructor(num1 = 1, num2 = 2, num3 = 3, bool1 = true) {
        
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.bool1 = bool1;
    }

    calculate() {
        
        if(this.bool1) {
            
            console.log("Result:", this.num1 + this.num2 + this.num3);
            return;
        }
        
        return "The value of bool1 is incorrect"
    }
}

var Ex1 = new WithDefaultParams();
Ex1.calculate(); 

var Ex2 = new WithDefaultParams(5,10,15, true);
Ex2.calculate();
