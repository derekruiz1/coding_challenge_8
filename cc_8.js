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
    }}} //Different fees for each tier

    console.log("Service Fee:", "$" + amount * serviceFee);
}

calculateServiceFee(200, "Premium"); 
calculateServiceFee(500, "Standard"); 

//Task 4 - Parameters and Arguments 
function calculateRentalCost(days, carType, insurance = false) {
    const carRate = {
        "Economy": 40,
        "Standard": 60,
        "Luxury": 100
    } //Rates for each car type

    let insuranceFee = 0
    if (insurance === true) {
        insuranceFee = 20 
    } //Insurance rate if chosen 
    console.log("Total Rental Cost:", "$" + ((carRate[carType] * days) + (insuranceFee * days))) //Formula to calculate cost
}

calculateRentalCost(3, "Economy", true); 
calculateRentalCost(5, "Luxury", false); 

//Task 5 - Returning Values
function calculateLoanPayment(principal, rate, time) {
    let totalPayment = principal + (principal * rate * time) //Formula calculating payment
    console.log("Total Payment:", "$" + totalPayment) //Logging payment
};

calculateLoanPayment(1000, 0.05, 2); 
calculateLoanPayment(5000, 0.07, 3); 

//Task 6 - Higher-Order Functions
let transactions = [200, 1500, 3200, 800, 2500]
function filterLargeTransactions(transactions,filterFunction) {
    let filters = transactions.filter(filterFunction) //Function to set up filter 
    console.log("Filtered Transactions:", filters)
};

filterLargeTransactions(transactions, amount => amount > 1000);

//Task 7 - Closures
function createCartTracker() {
    let cartTotal = 0
    return function (item) {
        cartTotal += item
    return (cartTotal) //Function that keeps adding to cart
}}

let cart = createCartTracker();
console.log("Total Cart Value:", "$" + cart(20)); 
console.log("Total Cart Value:", "$" + cart(35)); 

//Task 8 - Recursion in JavaScript
function calculateGrowth(years, revenue) {
    if (years >= 10) return revenue; //Anything past 10 years is stopped
    return calculateGrowth(years + 1, revenue * 1.05); //Formula to calculate growth 
}

console.log("Projected Revenue:", "$" + calculateGrowth(8, 1000).toFixed(2));
console.log("Projected Revenue:", "$" +calculateGrowth(5, 5000).toFixed(2));