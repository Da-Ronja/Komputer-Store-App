export async function fehctLaptopData(baseURL, id) {
    try {
        const response = await fetch(`${baseURL}${id}`);
        const data = await response.json();
        
        return data
    } catch (error) {
        console.log(error)
    }
}