// Task 1: Object Properties - Customer Profile
const customer = { name: "John Doe", age: 35, email: "john.doe@email.com" };
console.log(`Customer Name: ${customer.name}`);
console.log(`Customer Age: ${customer.age}`);
console.log(`Customer Email: ${customer.email}`);
// Task 2: Object Methods - Order Details
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder: function () {
        console.log(`Order ID: ${this.orderId}, Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
};
order.displayOrder();

//Task 3: Array Manipulation - Shopping Cart
let cartItems = ["Laptop", "Phone", "Headphones"];
cartItems.push("Tablet"); // Add item at the end
cartItems.pop(); // Remove last item
cartItems.unshift("Smartwatch"); // Add item at the beginning
cartItems.shift(); // Remove first item
console.log(cartItems);

// Task 4: Map Method - Price Adjustments
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9); // Apply 10% discount
console.log(discountedPrices);

// Task 5: Filter Method - Product Availability
const inventory = [5, 0, 12, 8, 0];
const availableProducts = inventory.filter(quantity => quantity > 0);
console.log(availableProducts);

// Task 6: Reduce Method - Revenue Calculation
const sales = [500, 300, 200, 400];
const totalRevenue = sales.reduce((total, sale) => total + sale, 0);
console.log(`Total Revenue: $${totalRevenue}`);

// Task 7: Find Method - Customer Search
const customers = ["Alice", "Bob", "Charlie", "David"];
const foundCustomer = customers.find(name => name === "Charlie");
console.log(foundCustomer);

//  Task 8: Function Declaration - Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
console.log(`Tax on $100 at 10%: $${calculateTax(100, 0.1)}`);

// Task 9: Function Expression - Discount Application
const applyDiscount = function (price, discount) {
    return price - (price * discount);
};
console.log(`Discounted Price: $${applyDiscount(100, 0.2)}`);

// Task 10: Arrow Function - Loyalty Points
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount / 10);
console.log(`Loyalty Points for $250: ${calculatePoints(250)}`);