// 1. expense class (OOP)
class expense {
    constructor(description, amount, category, date) {
        this.description = description;
        this.amount = amount;
        this.category = category;
        this.date = date;
    }
}
item1 = new expense("breakfast", 200, "food", "30/10/2026")
item2 = new expense("travel", 250, "transport", "30/10/2026")

console.log(item1.description)
console.log(item2)

// first object
const my_expence = {
    description: "breakfast",
    amount: 200,
    category: "food",
    date: "30/10/2026"
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