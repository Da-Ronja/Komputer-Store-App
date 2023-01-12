const workButton = document.getElementById("work-button");
const bankButton = document.getElementById("bank-button");
const getLoanButton = document.getElementById("get-loan-button");
const balanceValue = document.getElementById("balance");
const payValue = document.getElementById("pay");
let afterPayAmount = 0;

const currencyFormatter = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' });

const startUpValues = () => {
    balanceValue.innerHTML = currencyFormatter.format(0);
    payValue.innerHTML = currencyFormatter.format(0);
}
startUpValues();

workButton.addEventListener('click', (event) => {
    const payAmount = 100;
    console.log("WORK")

    afterPayAmount = afterPayAmount + payAmount;
    payValue.innerHTML = currencyFormatter.format(afterPayAmount);
})

bankButton.addEventListener('click', (event) => {
    console.log("BANK")
})

getLoanButton.addEventListener('click', (event) => {
    console.log("GET A LOAN")
})

