const expenseForm = document.getElementById("expenseForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("expenseDate");

// Get today's date
function today() {
    const now = new Date();
    const year = getFullYear();
    const month = (now.getMonth() + 1).padStart(2, "0");
    const day = (now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
}

// Format amounts in Kenyan shillings
function formatMoney(amount) {
    return `KSh ${amount.toLocaleString("en-KE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })}`;
}
//  expense class (OOP)
class expense {
    constructor(description, amount, category, date) {
        this.description = description;
        this.amount = amount;
        this.category = category;
        this.date = date;
    }
}

// 3. ExpenseTracker class (OOP)
class ExpenseTracker {
    constructor() {
        // Load saved expenses
        try {
            this.expenses = JSON.parse(
                localStorage.getItem("expenses")
            ) || [];
        } catch {
            this.expenses = [];
        }
    }

    // Save expenses
    saveExpenses() {
        localStorage.setItem(
            "expenses",
            JSON.stringify(this.expenses)
        );
    }
}

 // Add one expense
    addExpense(expense) {
        this.expenses = [...this.expenses, expense];
        this.saveExpenses();
    }
// first object
const my_expence = {
    description: "breakfast",
    amount: 200,
    category: "food",
    date: "30/10/2026"
}

//  ExpenseTracker class (OOP)
class ExpenseTracker {
    constructor() {
        // Load saved expenses
        try {
            this.expenses = JSON.parse(
                localStorage.getItem("expenses")
            ) || [];
        } catch {
            this.expenses = [];
        }
    }
}

// destructuring first object
const { description, amount, category, date } = my_expence
console.log(description);
console.log(amount);
console.log(category);
console.log(date);

// second object
const my_expence2 = {
    description: "travel",
    amount: 250,
    category: "transport",
    date: "30/10/2026"
}
// destructuring with second object
const {
    description: description2,
    amount: amount2,
    category: category2,
    date: date2
} = my_expence2

console.log(description2);
console.log(amount2);
console.log(category2);
console.log(date2);

// cookies

const expiryDate = new Date("2030-03-05T12:00:00Z");

document.cookie = `webName=myexpencetracker; expires=${expiryDate.toUTCString()}; path=/`;

console.log(document.cookie);