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

    test("should create a new expense", () => {
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
