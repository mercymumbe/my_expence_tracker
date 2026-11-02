const expenseForm = document.getElementById("expenseForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("expenseDate");

// Get today's date
function today() {
    const now = new Date();

    const year = now.getFullYear();
    const month = `${now.getMonth() + 1}`.padStart(2, "0");
    const day = `${now.getDate()}`.padStart(2, "0");

    return `${year}-${month}-${day}`;
}

console.log(today());

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

class ExpenseTracker {
    constructor() {
        this.expenses = JSON.parse(
            localStorage.getItem("expenses")
        ) || [];
    }

    // Save expenses in the browser
    saveExpenses() {
        localStorage.setItem(
            "expenses",
            JSON.stringify(this.expenses)
        );
    }

    // Add one expense
    addExpense(expense) {
        this.expenses = [...this.expenses, expense];
        this.saveExpenses();
    }

    // Add many expenses using the rest operator
    addExpenses(...expenses) {
        this.expenses = [...this.expenses, ...expenses];
        this.saveExpenses();
    }

    // Delete an expense by ID
    deleteExpense(id) {
        this.expenses = this.expenses.filter(
            expense => expense.id !== id
        );

        this.saveExpenses();
    }
}

// Create the tracker
const tracker = new ExpenseTracker();

// Create expense objects
const expense1 = {
    description: "Breakfast",
    amount: 200,
    category: "Food",
    date: "2026-10-30"
};

const expense2 = {
    description: "Travel",
    amount: 250,
    category: "Transport",
    date: "2026-10-30"
};

// Add one expense
tracker.addExpense(expense1);

// Add multiple expenses
tracker.addExpenses(
    expense3,{
        description: "Lunch",
        amount: 300,
        category: "Food",
        date: "2026-10-30"
    }
);

console.log(tracker.expenses);

// Delete an expense
// tracker.deleteExpense(1);
// destructuring with second object


// cookies

const expiryDate = new Date("2030-03-05T12:00:00Z");

document.cookie = `webName=myexpencetracker; expires=${expiryDate.toUTCString()}; path=/`;

console.log(document.cookie);