const getLoanButton = document.getElementById("get-loan-button");
const bankButton = document.getElementById("bank-button");
const workButton = document.getElementById("work-button");
const repayLoanButton = document.getElementById("repay-loan-button");
const buyButton = document.getElementById("buy-button");
const balanceElement = document.getElementById("balance");
const balanceLoanElement = document.getElementById("balance-loan");
const balanceLoanContainer = document.getElementById("balance-loan-container")
const salaryElement = document.getElementById("pay");
let bankBalance = 0;
let outStandingLoan = 0;
let salary = 0;

// Currency formatter
const currencyFormatter = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' });

// Function to format and display currency
const formatCurrency = (element, value) => {
    element.innerHTML = currencyFormatter.format(value);
}

// Function to toggle visibility of elements
const toggleVisibility = (element, isVisible) => {
    element.style.display = isVisible ? "block" : "none";
}

// Get loan button event listener
getLoanButton.addEventListener('click', () => {
    // Get amount from prompt
    const loanAmount = prompt("how much do you what to loan?");

    // Checking if loan amount is less or equal the dubble the bank balance and no outstanding loan
    if (loanAmount <= (bankBalance * 2) && outStandingLoan === 0) {

        // Update and display the outstanding loan
        outStandingLoan = loanAmount;
        // Converting string to int
        outStandingLoan = parseInt(loanAmount);
        formatCurrency(balanceLoanElement, outStandingLoan);
        // Toggle visibility of repay loan button and loan balance element
        toggleVisibility(repayLoanButton, true);
        toggleVisibility(balanceLoanContainer, true);
    } else {
        // Show error message if the loan conditions are not met
        alert("You did not have enough founds or you all ready have a outstanding loan");
    }
});

// Bank button event listener
bankButton.addEventListener('click', () => {
    // Check if there is a outstanding loan
    if (outStandingLoan > 0) {
        // Deduct 10% of salary for outStandingLoan
        const salaryDeduction = salary * 0.1;
        outStandingLoan -= salaryDeduction;
        formatCurrency(balanceLoanElement, outStandingLoan);

        // Transfer remaining salary to bank balaance
        bankBalance += salary - salaryDeduction;
    } else {
        // Transfer salary to bank account
        bankBalance += salary;
    }

    // Update bank balance and salary
    formatCurrency(balanceElement, bankBalance);
    salary = 0;
    formatCurrency(salaryElement, salary);
});

// Work button event listener
workButton.addEventListener('click', () => {
    // Increase salary by 100
    salary += 100;
    formatCurrency(salaryElement, salary)
});

// Repay loan button event listener
repayLoanButton.addEventListener('click', () => {
    // Deduct salary from loan
    const remainingBalance = outStandingLoan -= salary;

    // Check if loan is less or equal to zero
    if (outStandingLoan <= 0) {
        // Hide repay loan button and loan balance element
        toggleVisibility(repayLoanButton, false);
        toggleVisibility(balanceLoanContainer, false);
        // Set outstanding loan to 0
        outStandingLoan = 0;

        // Check if there is any remaining balance
        if (remainingBalance < 0) {
            // Update bank balance with the remaining balance
            bankBalance -= remainingBalance;
            formatCurrency(balanceElement, bankBalance);
        }
    }

    // Update outstanding loan and salary
    formatCurrency(balanceLoanElement, outStandingLoan);
    salary = 0;
    formatCurrency(salaryElement, salary);
});


buyButton.addEventListener('click', () => {
    // Create new variable for the total bank balanse with loan included
    const totalBankBalance = bankBalance + outStandingLoan;
    // Message to show in prompt
    let messageText = "";

    // Check if bank balance is equal or greather then the selected laptop price.
    if (totalBankBalance >= 200) {
        // Deducted price amount from bank balance
        bankBalance -= 200
        // Check if bank balance is less or equal to zero
        if (bankBalance <= 0) {
            bankBalance = 0;
        }

        formatCurrency(balanceElement, bankBalance);
        // receive a message that "you are now the owner of the new laptop!"
        messageText = "You are now the owner of the new laptop!";
    } else {
        console.log("no")
        // if not a message must be shown that you cannot afford the laptop.
        messageText = "You cannot afford the laptop.";
    }

    const message= alert(messageText);
});