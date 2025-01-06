export function fetchImage(imageType) {
    const imageCount = 18; // Het aantal paren (18)
    const apiUrl = imageType === 'dog'
        ? `https://dog.ceo/api/breeds/image/random/${imageCount}`
        : 'https://api.thecatapi.com/v1/images/search?limit=18';  // Cat API voorbeeld

    return fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (imageType === 'dog') {
                return data.message; // Dog API retourneert een lijst van image URLs
            } else if (imageType === 'cat') {
                return data.map(item => item.url); // Cat API retourneert een lijst van image URLs
            }
        })
        .catch(err => console.error('Fout bij het ophalen van afbeeldingen:', err));
}
