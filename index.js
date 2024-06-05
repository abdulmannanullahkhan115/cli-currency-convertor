import inquirer from "inquirer";
let currencyExchange = {
    "PKR": {
        "EURO": 0.0034,
        "USD": 0.0034,
        "PKR": 1.00
    },
    "USD": {
        "PKR": 278.52,
        "EURO": 0.94,
        "USD": 1.00
    },
    "EURO": {
        "EURO": 1.00,
        "PKR": 297.49,
        "USD": 1.07
    }
};
const Answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["USD", "PKR", "EURO"],
        message: "enter your currency"
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "EURO"],
        message: "to which currency do you want to convert"
    },
    {
        name: "amount",
        type: "number",
        message: "enter your amout"
    },
]);
const { from, to, amount } = Answer;
if (from && to && amount) {
    let result = currencyExchange[from][to] * amount;
    console.log(`your currency convertion rate is ${result}`);
}
