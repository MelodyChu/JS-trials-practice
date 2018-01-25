// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();



// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309');
phoneNumbers.set('mobile', '415-555-1212');
phoneNumbers.set('business', '415-123-4567');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information

function accountInfo(accountHolder,accountNumber,businessName) {
    console.log("Account Holder: " + accountHolder);
    console.log("Account Number: " + accountNumber);
    console.log("Business Name: " + businessName);
}

// Add function to print all addresses, including a header

function showAddresses(addresses) {
    console.log("Addresses");
    for (let address of addresses) {
        console.log(`${address}`);
    }
}

// Add function to print phone types and numbers

function showPhones(phoneNumbers) {
    console.log("Phone Numbers:");
    for (let phoneNumber of phoneNumbers) {
        console.log(`${phoneNumber[0]}` + ": " + `${phoneNumber[1]}`);
    }
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create a map of transactions
let transactionMap = new Map([
    ['May-2', -500],
    ['May-13', 1200],
    ['May-15', -100],
    ['May-21', -359],
    ['May-29', 2200]
     ]);
// Add function to add transactions

function addTransaction(date, amount) {
    transactionMap.set(date, amount);
}

// Add function to show balance status

function showBalanceStatus(balance) {
    if (balance < 0) {
        console.log("YOU ARE OVERDRAWN");
    } else if (0 < balance && balance < 20) {
        console.log("Warning: You are close to zero balance");
    } else {
        console.log("Thank you for your business.");
    }
}


// Add function to show transactions

function showTransactions(map, balance) {
    console.log(balance);
    for (let [date, amount] of transactionMap) {
        console.log("Date: " + date);
        console.log("Amount: " + amount);
        if (amount > 0) {
            console.log("Type: Deposit");
        } else {
            console.log("Type: Withdrawal");
        }
        balance += amount;
        if (balance < 0) {
            balance -= 25;
        } console.log("Balance: " + balance);
    }
    showBalanceStatus(balance);
    return balance;
}

// ///////////////////////////////////////////////////////
// All Customer Info:

// Make a Map of customer info
let customerBalloonicorn = new Map([
    ["Account Holder", accountHolder],
    ["Account Number", accountNumber],
    ["Business Name", businessName],
    ["Addresses", addresses],
    ["Phone Numbers", phoneNumbers],
    ["Transactions", transactionMap],
    ["Starting Balance", 26000]
])

// Function to add customer attributes
function addProperties(melon="Canteloupe", pets=0) {
    customerBalloonicorn.set("melon", melon);
    customerBalloonicorn.set("numPets", pets);
}

// addProperties("Casaba", 2);


// ///////////////////////////////////////////////////////
// Getting a Business Loan

function isPreferredCustomer(income,customer) {
    if (customer.get('melon') === 'Casaba' || customer.get('numPets') > 5) {
        return true;
    }
}

function calcInterest(income,customer) {
    let preferredCustomer = isPreferredCustomer(income, customer);
    if (income < 100000 && preferredCustomer === true) {
        let interest = 0.05;
    }
    else if (income < 100000 && preferredCustomer === false) {
        let interest = 0.08;
    }
    else if (income > 100000 && income < 200000 && preferredCustomer === false) {
        let interest = 0.07;
    }
    else if (income > 100000 && income < 200000 && preferredCustomer === true) {
        let interest = 0.04;
    }
    else {
        let interest = 0.04;
    }
}


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report

function showCustomerReport(income, customer) {
    accountInfo(customer.get("Account Holder"),
        customer.get("Account Number"),
        customer.get("Business Name"));
    showAddresses(customer.get("Addresses"));
    showPhones(customer.get("Phone Numbers"));
    console.log("Starting Balance: " + customer.get("Starting Balance"));
    endingBalance = showTransactions(customer.get("Transactions"), customer.get("Starting Balance"));
    console.log("Ending Balance: " + endingBalance);
    if (isPreferredCustomer(income,customer) === true){
        console.log("Congratulations on being a premiere customer!");
    }
}



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week


// Add a function for weekly hours






