// 1. xpense class (OOP)
class expense {
    constructor(description, amount, category, date) {
        this.description = description;
        this.amount = amount;
        this.category = category;
        this.date = date;
    }
}
 item1= new expense("breakfast",200,"food","30/10/2026")
 item2= new expense("travel",250,"transport","30/10/2026")

console.log(item1.description)
console.log(item2)