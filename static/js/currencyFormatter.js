// Function to format and display currency
const formatCurrency = (element, value) => {
    const currencyFormatter = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' });

    element.innerHTML = currencyFormatter.format(value);
}

export default formatCurrency;