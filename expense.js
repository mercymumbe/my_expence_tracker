// Expense class (OOP)
class Expense {
    constructor(description, amount, category, date) {
        this.description = description;
        this.amount = Number(amount);
        this.category = category;
        this.date = date;
    }
}

// ExpenseTracker class (OOP)
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

    // Delete an expense by description
    deleteExpense(description) {
        this.expenses = this.expenses.filter(
            expense => expense.description !== description
        );

        this.saveExpenses();
    }
}

// Format amounts in Kenyan shillings
function formatMoney(amount) {
    return "KSh " + Number(amount).toFixed(2);
};

module.exports = {
    Expense,
    ExpenseTracker,
    formatMoney
};