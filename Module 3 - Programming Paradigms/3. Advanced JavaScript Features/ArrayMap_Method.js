let monthlySalary = [1000, 1200, 900, 1800];

console.log(
    
    "Yearly Salary:", 
    
    monthlySalary.map ( 
    
        function (salary) {
    
            return salary * 12;
        } 
    )
)