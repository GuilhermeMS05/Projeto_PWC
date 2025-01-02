// Function to fetch data from local storage
function fetchFromLocalStorage(key) {
    // Retrieve the item from local storage
    const data = localStorage.getItem(key);
    
    // Parse the JSON string back to an object
    return data ? JSON.parse(data) : null;
}

// Example usage
const favoritos = fetchFromLocalStorage('favoritos');
console.log(favoritos);