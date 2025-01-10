export function fetchImage(imageType) {
    const imageCount = 18; // Het aantal paren (18)
    const apiUrl = imageType === 'dog'
        ? `https://dog.ceo/api/breeds/image/random/${imageCount}`
        : 'https://api.thecatapi.com/v1/images/search?limit=18';

    console.log(`Fetching images of type: ${imageType}`);
    console.log(`API URL: ${apiUrl}`);

    return fetch(apiUrl)
        .then(response => {
            console.log(`Response status: ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log(`Response data for ${imageType}:`, data);

            if (imageType === 'dog') {
                return data.message;
            } else if (imageType === 'cat') {
                return data.map(item => item.url);
            }
        })
        .catch(err => {
            console.error('Fout bij het ophalen van afbeeldingen:', err);
        });
}
