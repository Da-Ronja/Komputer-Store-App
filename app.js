const laptopSelect = document.getElementById("select-laptop");

const computersAPI = "computers";

async function fehctLaptopData(id) {
    try {
        const respons = await fetch(`https://hickory-quilled-actress.glitch.me/${id}`);
        const data = await respons.json();

        return data
    } catch (error) {
        console.log(error);
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
    const laptopImage = document.getElementById("imageTest");

    laptopTitle.innerHTML = laptop.title;
    laptopPrice.innerHTML = currencyFormatter.format(laptop.price);
    laptopDescription.innerHTML = laptop.description;

    displayLaptopFeatures(laptop.specs);

    // console.log("This Is Image does not work bebous of await", fehctLaptopData(laptop.image));
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

const handleSelectedLaptop = e => {
    const selectedLaptop = laptops[e.target.selectedIndex];

    displayLaptop(selectedLaptop);
}

laptopSelect.addEventListener('change', handleSelectedLaptop);