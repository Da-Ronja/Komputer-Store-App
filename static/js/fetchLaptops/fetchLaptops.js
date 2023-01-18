// Asynchronous function that takes in two parameters base URL and resurs
export async function fehctLaptopData(baseURL, id) {
    try {
        // Make a GET request to with the parameters
        const response = await fetch(`${baseURL}${id}`);
        // Attempt to parse the resopns as JSON
        const data = await response.json();
        
        // If successful, returns the data
        return data
    } catch (error) {
        // If an error occurs, log it to the console
        console.log(error)
    }
}