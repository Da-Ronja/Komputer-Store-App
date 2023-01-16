const laptopSelect = document.getElementById("select-laptop");

const computersAPI = "computers";
const baseURL = "https://hickory-quilled-actress.glitch.me/";

async function fehctLaptopData(id) {
    try {
        const response = await fetch(`${baseURL}${id}`);
        const data = await response.json();

        return data
    } catch (error) {
        console.log(error)
    }
}

const laptops = await fehctLaptopData(computersAPI);

const currencyFormatter = new Intl.NumberFormat('sv-SE', { style: 'currency', currency: 'SEK' });

const addLaptopToOption = (laptop) => {
    const laptopOption = document.createElement("option");
    laptopOption.value = laptop.id;
    laptopOption.appendChild(document.createTextNode(laptop.title));
    laptopSelect.appendChild(laptopOption);
}

const addLaptopsToSelect = () => {
    laptops.forEach(laptop => addLaptopToOption(laptop));

    displayLaptop(laptops[0]);
}

const displayLaptop = (laptop) => {
    const laptopTitle = document.getElementById("laptop-title");
    const laptopDescription = document.getElementById("laptop-descripton");
    const laptopPrice = document.getElementById("laptop-price");
    const laptopImage = document.getElementById("laptop-image");

    laptopTitle.innerHTML = laptop.title;
    laptopPrice.innerHTML = currencyFormatter.format(laptop.price);
    laptopDescription.innerHTML = laptop.description;

    displayLaptopFeatures(laptop.specs);

    // TODO - ask if this is correct
    laptopImage.src = `${baseURL}${laptop.image}`;
    console.log(laptopImage.src)
}

const displayLaptopFeatures = (specs) => {
    const laptopFeatures = document.getElementById("laptop-feature");
    laptopFeatures.innerHTML = "";

    specs.forEach(item => {
        const specsLi = document.createElement("li");
        specsLi.appendChild(document.createTextNode(item));
        laptopFeatures.append(specsLi);
    });
}

addLaptopsToSelect()

const handleSelectedLaptop = laptop => {
    const selectedLaptop = laptops[laptop.target.selectedIndex];

    displayLaptop(selectedLaptop);
}

laptopSelect.addEventListener('change', handleSelectedLaptop);