const {
    Expense,
    ExpenseTracker,
    formatMoney
} = require("./expense.js");

// Clear localStorage before every test
beforeEach(() => {
    localStorage.clear();
});

// Test the Expense class
describe("Expense class", () => {

    test("new expense", () => {
        const myExpense = new Expense(
            "Lunch",
            250,
            "Food",
            "2026-11-04"
        );

        expect(myExpense.description).toBe("Lunch");
        expect(myExpense.amount).toBe(250);
        expect(myExpense.category).toBe("Food");
        expect(myExpense.date).toBe("2026-11-04");
    });

});

// Test the ExpenseTracker class
describe("ExpenseTracker class", () => {

    let tracker;

    beforeEach(() => {
        tracker = new ExpenseTracker();
    });

    test("should add a new expense", () => {
        const myExpense = new Expense(
            "Lunch",
            250,
            "Food",
            "2026-11-04"
        );

        tracker.addExpense(myExpense);

        expect(tracker.expenses).toHaveLength(1);
        expect(tracker.expenses[0].description).toBe("Lunch");
    });

    test("should add multiple expenses", () => {
        const expense1 = new Expense(
            "Lunch", 250, "Food", "2026-11-04"
        );

        const expense2 = new Expense(
            "Bus fare", 100, "Transport", "2026-11-04"
        );

        tracker.addExpenses(expense1, expense2);

        expect(tracker.expenses).toHaveLength(2);
    });

    test("should delete an expense", () => {
        const myExpense = new Expense(
            "Lunch", 250, "Food", "2026-11-04"
        );

        tracker.addExpense(myExpense);
        tracker.deleteExpense("Lunch");

        expect(tracker.expenses).toHaveLength(0);
    });

    test("should save expenses in localStorage", () => {
        const myExpense = new Expense(
            "Lunch", 250, "Food", "2026-11-04"
        );

        tracker.addExpense(myExpense);

        const savedExpenses = JSON.parse(
            localStorage.getItem("expenses")
        );

        expect(savedExpenses).toHaveLength(1);
        expect(savedExpenses[0].description).toBe("Lunch");
    });

    test("should load previously saved expenses", () => {
        const savedExpense = [{
            description: "Lunch",
            amount: 250,
            category: "Food",
            date: "2026-11-04"
        }];

        localStorage.setItem(
            "expenses",
            JSON.stringify(savedExpense)
        );

        const newTracker = new ExpenseTracker();

        expect(newTracker.expenses).toHaveLength(1);
        expect(newTracker.expenses[0].description).toBe("Lunch");
    });

});

// Test the formatMoney function
describe("formatMoney function", () => {

    test("should format amounts in Kenyan shillings", () => {
        expect(formatMoney(500)).toContain("500.00");
        expect(formatMoney(500)).toContain("KSh");
    });

});