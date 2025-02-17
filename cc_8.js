//Task 1 - Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate) //Formula for the function
    console.log("Net Salary:", "$" + netSalary) //Logging the net salary
};

calculateSalary(5000, 500, 0.1); 
calculateSalary(7000, 1000, 0.15); 