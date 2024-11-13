/**
 * FUNCTIONS
 * 
 * They are blocks of code design to perform a particular task.
 * They are reuseable and helps in organizing codes into smaller and more manageable pieces.
 * They accept inputs, process them and return an output.
 * 
 * SYNTAX;
 * functionName(parameters){code execution}
 * 
 * Function Types:
 * Function declaration: defines a named function that can be used before it is defined
 * function validator(a,b){}
 * 
 * Function expressions: defines a func that can be anonymous and is stored in a variable
 * const validator = function() {}
 * 
 * Arrow functions: are a concise way of writing functions using the arrow syntax "=>".
 * they are often used for short and simple functions.
 * they can be an anonymous functions
 * let validator = ()=> {}
 * 
 * IIFE - immediately invoked function expression: they are functions that runs immediately they are defined.
 * (function(){})()
 * 
 * Anonymous function: they are functions without a name often use as arguments without a name
 * 
 * ARGUMENTS/PARAMETERS
 * when declaring, we use parameters 
 * when calling the functions, we use arguments.
 * 
 * you can set a default values for parameters in case they are not provided in the function calls.
 * 
 * The Return Statement: to return a value from a function
 * 
 * Scope: it refers to the accessibility of variables within functions
 * Global and Local Scope
 * 
 * function can be assigned as methods to objects
 * 
 * Look out Fonts and include it in your dashboard
 * 
 */

/**
 * Simulate a Fintech system
 * Users(3 users)--Acc No, Bal(7000,4300,0), Name, Pin, restricted(true,false,false)
 * 
 * Create a function that checks user balance, allows withdrawals, allow deposit, restricts an account,restricts an account, allows funds transfer()u can only transfer between 11am and 4pm
 * The allow funds transfer(from, to, pin)
 */

let users = [
    {
        "Acc.No":"0037736653",
        "Balance": 7000,
        "Name": "Edoghotu Gideon Azibaobuom",
        "Pin": 4592,
        "isRestricted": true
    },
    {
        "Acc.No":"0037436653",
        "Balance": 4300,
        "Name": "Heritage Imo",
        "Pin": 5903,
        "isRestricted": false
    },
    {
        "Acc.No":"0037231653",
        "Balance": 0,
        "Name": "Ikenna Dimkpa",
        "Pin": 5935,
        "isRestricted": false
    },
]

// checks user balance
function checkBalance(user){
    return user.Balance;
}

let userAccountBalance = checkBalance(users[0]);

console.log(`${users[0].Name} has account balance of ${userAccountBalance}`);

//Allows withdrawals
function withdraw(user, amount, pin){
    if (user.isRestricted == false) {
        return "Your account is restricted, contact your bank manager";
    }
    if (user.Pin != pin) {
        return "Wrong pin";
    }
    if (user.Balance < amount){
        return "Insufficient funds";
    }

    user.Balance = user.Balance - amount;
    return `You can take your cash. Your balance now is ${user.Balance}`; 
}

let userWithdraw = withdraw(users[0], 5000, 4592);
console.log(userWithdraw);

//Allows deposit
function deposit (user, amount) {
    return `Your account balance now is ${user.Balance + amount}`;
}

let userDeposit = deposit(users[0], 50000);
console.log(userDeposit);

//Restrict an account
function restrict (user) {
    return user.isRestricted = false;
}

let restrictAccount = restrict(users[0]);

let userWithdraw2 = withdraw(users[0], 1000, 4592);
console.log(userWithdraw2);

//UnRestrict an account
function unRestrict (user) {
    return user.isRestricted = true;
}

let unRestrictAccount = unRestrict(users[0]);
let userWithdraw3 = withdraw(users[0], 1000, 4592);
console.log(userWithdraw3);

function transferCash (fromUser, toUser, amount, pin){
    let now = new Date()
    let hours = now.getHours()

    if (!hours >= 11 && !hours <= 16){
        return "You cannot transfer by this time";
    }

    if (fromUser.isRestricted == false) {
        return "Your account is restricted, contact your bank manager";
    }
    if (fromUser.Pin != pin) {
        return "Wrong pin";
    }
    if (fromUser.Balance < amount){
        return "Insufficient funds";
    }

    console.log(`${fromUser.Name} balance before transfer is ${fromUser.Balance} and ${toUser.Name} balance is ${toUser.Balance}`)

    fromUser.Balance = fromUser.Balance - amount;
    toUser.Balance = toUser.Balance + amount;

    return `${fromUser.Name} balance after transfer is now ${fromUser.Balance} and ${toUser.Name} balance is now ${toUser.Balance}`
}

let userTransfer = transferCash(users[0], users[1], 1000, 4592);
console.log(userTransfer);