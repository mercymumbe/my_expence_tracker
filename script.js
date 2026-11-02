const expenseForm = document.getElementById("expenseForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const categoryInput = document.getElementById("category");
const dateInput = document.getElementById("expenseDate");

const overallTotal = document.getElementById("overallTotal");
const todayTotal = document.getElementById("todayTotal");
const formMessage = document.getElementById("formMessage");
const clearFilter = document.getElementById("clearFilter");
const filterCategory = document.getElementById("filterCategory");

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
// expencetracker (OOP)
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

    // Delete an expense 
    deleteExpense(description) {
        this.expenses = this.expenses.filter(
            expense => expense.description !== description
        );

        this.saveExpenses();
    }
}

// Create the tracker
const tracker = new ExpenseTracker();

const expenseList = document.getElementById("expenseList");
const totalExpenses = document.getElementById("totalExpenses");

// Display expenses in the recorder
function displayExpenses() {
    expenseList.innerHTML = "";

    tracker.expenses.forEach((item) => {
        const row = document.createElement("div");

        row.textContent =
            `${item.description} - ${formatMoney(item.amount)} - ` +
            `${item.category} - ${item.date}`;

        expenseList.appendChild(row);
    });
     const total = tracker.expenses.reduce(
        (sum, item) => sum + Number(item.amount),
        0
    );

    totalExpenses.textContent = formatMoney(total);
}

// Set the date field to today's date
dateInput.value = today();

// Listen for the form submission
expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the details entered by the user
    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);
    const category = categoryInput.value;
    const date = dateInput.value;



    // Create a new expense
    const newExpense = new expense(
        description,
        amount,
        category,
        date
    );

    // Save the expense
    tracker.addExpense(newExpense);

    // Display the updated expenses
    displayExpenses();

    // Clear the form
    expenseForm.reset();
    dateInput.value = today();
});

// Display previously saved expenses
displayExpenses();

// cookies

const expiryDate = new Date("2030-03-05T12:00:00Z");

document.cookie = `webName=myexpencetracker; expires=${expiryDate.toUTCString()}; path=/`;

console.log(document.cookie);