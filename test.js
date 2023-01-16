const getLoanButton = document.getElementById("get-loan-button");
const bankButton = document.getElementById("bank-button");
const workButton = document.getElementById("work-button");
const repayLoanButton = document.getElementById("repay-loan-button");
const balanceElement = document.getElementById("balance");
const balanceLoanElement = document.getElementById("balance-loan");
const salaryElement = document.getElementById("pay");
const starterAmount = 0;
let remainingBalance = 0;
let salaryAccount = 0;
let bankAccount = 0;
let outStandingLoan = 0;

const currencyFormatter = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' });

const valueFormatter = (element, value) => {

    element.innerHTML = currencyFormatter.format(value);
}

valueFormatter(balanceElement, starterAmount);
valueFormatter(salaryElement, starterAmount);

getLoanButton.addEventListener('click', () => {
    console.log("GET A LOAN")
    console.log(salaryAccount, "before")
    const getLoanPromt = prompt("how much do you what to loan?")


    if (getLoanPromt <= (bankAccount * 2) && outStandingLoan === 0) {
        outStandingLoan = getLoanPromt;
        valueFormatter(balanceLoanElement, outStandingLoan);
        console.log(salaryAccount, "got the loan")
        console.log("You get the loan ", getLoanPromt)
    } else {
        console.log(salaryAccount, "did not get the loan")
        console.log("You havent enaf ", getLoanPromt)
    }
})

bankButton.addEventListener('click', () => {
    console.log("BANK");

    if (outStandingLoan > 0) {
        // Deduct 10% of salary for outStandingLoan
        const deduction = salaryAccount * 0.1;

        outStandingLoan = outStandingLoan - deduction;
        valueFormatter(balanceLoanElement, outStandingLoan);

        // Transfer remaining of salary to bank account
        remainingBalance = salaryAccount - deduction;
        bankAccount = bankAccount + remainingBalance;

    } else {
        // Transfer salary to bank account
        bankAccount = bankAccount + salaryAccount;
    }

    // Dont Show button for repayloan and loan amount
    if (outStandingLoan === 0) {
        console.log("dont show button and loan amount")
    } else {
        console.log("show button and loan amount")
    }

    valueFormatter(balanceElement, bankAccount);

    salaryAccount = starterAmount;
    valueFormatter(salaryElement, salaryAccount);

})

workButton.addEventListener('click', () => {
    console.log("WORK")
    const salaryValue = 100;

    salaryAccount = salaryAccount + salaryValue;
    valueFormatter(salaryElement, salaryAccount);
    // console.log(salaryAccount)
})

repayLoanButton.addEventListener('click', () => {
    console.log("REPAY LOAN")

    // Upon clicking this button, the full value of your current Pay amount 
    // should go towards the outstanding loan and NOT your bank account.
    // Any remaining funds after paying the loan may be transferred to your bank account

    remainingBalance = outStandingLoan - salaryAccount;
    outStandingLoan = remainingBalance;

    if (outStandingLoan <= 0) {
        outStandingLoan = starterAmount;
        // Hidde button and loanbalance text

    }
        valueFormatter(balanceLoanElement, outStandingLoan);

    if (remainingBalance < 0) {

        bankAccount = bankAccount - remainingBalance
        valueFormatter(balanceElement, bankAccount);
    }

    salaryAccount = starterAmount;
    valueFormatter(salaryElement, salaryAccount);
})

