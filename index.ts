import inquirer from "inquirer";
import chalk from "chalk";

let currenciesArr = ["GBP", "USD", "EURO", "PKR", "INR", "BDT", "YUAN"];

let conversion = {
    "GBP":
    {
        "GBP": 1.0,
        "USD": 1.23,
        "EURO": 1.15,
        "PKR": 350.45,
        "INR": 102.36,
        "BDT": 135.46,
        "YUAN": 8.95
    },
    "USD":
    {
        "GBP": 0.81,
        "USD": 1.0,
        "EURO": 0.94,
        "PKR": 285.00,
        "INR": 83.23,
        "BDT": 110.16,
        "YUAN": 7.28
    },
    "EURO":
    {
        "GBP": 0.87,
        "USD": 1.07,
        "EURO": 1.0,
        "PKR": 304.51,
        "INR": 88.93,
        "BDT": 117.70,
        "YUAN": 7.67
    },
    "PKR":
    {
        "GBP": 0.0029,
        "USD": 0.0035,
        "EURO": 0.0033,
        "PKR": 1.0,
        "INR": 0.29,
        "BDT": 0.39,
        "YUAN": 0.026
    },
    "INR":
    {
        "GBP": 0.0098,
        "USD": 0.012,
        "EURO": 0.011,
        "PKR": 3.42,
        "INR": 1.0,
        "BDT": 1.32,
        "YUAN": 0.087
    },
    "BDT":
    {
        "GBP": 0.0074,
        "USD": 0.0091,
        "EURO": 0.0085,
        "PKR": 2.59,
        "INR": 0.76,
        "BDT": 1.0,
        "YUAN": 0.066
    },
    "YUAN":
    {
        "GBP": 0.11,
        "USD": 0.14,
        "EURO": 0.13,
        "PKR": 39.15,
        "INR": 11.43,
        "BDT": 15.13,
        "YUAN": 1.0
    }
}

async function currencyConvertor() {
    console.log(chalk.bold.italic.blueBright("Currency Converter"));


    let inputAns: {
        fromWhich: "GBP" | "USD";
        toWhich: "GBP" | "USD";
        amount: number;

    } = await inquirer.prompt([{
        name: "fromWhich",
        type: "list",
        choices: currenciesArr,
        message: "Select Currency [From]."
    },

    {
        name: "amount",
        type: "number",
        message: "Enter Amount to Convert:"
    },

    {
        name: "toWhich",
        type: "list",
        choices: currenciesArr,
        message: "Select Currency [To]."
    },
    ]);


    const { fromWhich, toWhich, amount } = inputAns;

    if (fromWhich && toWhich && amount) {

        let ConvertedCurr = conversion [fromWhich][toWhich] * amount;
        console.log(`${amount} ${fromWhich} is ${ConvertedCurr} ${toWhich}`);

    }
}

async function Again() {
    do {
        await currencyConvertor();
        var moreConv = await inquirer.prompt({
            name: "more",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to perform more operations?"
        });
        console.clear();
    }
    while (moreConv.more === "Yes");
    console.clear();
}

Again();