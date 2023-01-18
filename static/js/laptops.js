import formatCurrency from './currencyFormatter.js';

export class Laptop {
    constructor(data) {
        this.title = data.title;
        this.price = data.price;
        this.description = data.description;
        this.image = data.image;
        this.specs = data.specs
        this.id = data.id;
    }
    addOption(select) {
        const option = document.createElement("option");
        option.value = this.id;
        option.appendChild(document.createTextNode(this.title));
        select.appendChild(option);
    }
    display(baseURL) {
        const laptopTitle = document.getElementById("laptop-title");
        const laptopDescription = document.getElementById("laptop-descripton");
        const laptopPrice = document.getElementById("laptop-price");
        const laptopImage = document.getElementById("laptop-image");
        const laptopFeatures = document.getElementById("laptop-feature");
        laptopTitle.innerHTML = this.title;
        formatCurrency(laptopPrice, this.price)
        laptopDescription.innerHTML = this.description;

        laptopImage.src = `${baseURL}${this.image}`;
        laptopImage.onerror = function() {
            this.src = "../assets/No_Image.png";
        }

        laptopFeatures.innerHTML = "";
        this.specs.forEach(item => {
            const specsLi = document.createElement("li");
            specsLi.innerHTML = `${item}`;
            laptopFeatures.append(specsLi);
        });
    }
}