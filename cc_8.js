//Task 1 - Function Declaration
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate) //Formula for the function
    console.log("Net Salary:", "$" + netSalary) //Logging the net salary
};

calculateSalary(5000, 500, 0.1); 
calculateSalary(7000, 1000, 0.15); 

//Task 2 - Function Expression 
const calculateDiscount = function (price, discountRate) {
    let finalPrice = price - (price * discountRate) //Formula for the function
    console.log("Final Price:", "$" + finalPrice) //Logging the final price 
}

calculateDiscount(100, 0.2); 
calculateDiscount(250, 0.15); 

//Task 3 - Arrow Function
const calculateServiceFee = (amount,serviceType) => {
    let serviceFee = 0
    if (serviceType === "Premium") {
        serviceFee = 0.15
    } else { if (serviceType === "Standard") {
        serviceFee = 0.1
    } else { if (serviceType === "Basic") {
        serviceFee = 0.05
    }}}

    console.log("Service Fee:", "$" + amount * serviceFee);
}

calculateServiceFee(200, "Premium"); 
calculateServiceFee(500, "Standard"); 