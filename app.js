// Initialize Storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getlocationData();
// Initialize weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Initialize UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    // Change location
    weather.changeLocation(city, country);

    // Set location in local storage
    storage.setLocationData(city, country);

    // Get and display weather
    getWeather();

    //Close modal, (we have to use jquery for this)
    $('#locModal').modal('hide');
});

// weather.changeLocation('Breda', 'Netherlands');

function getWeather() {
    weather.getWeather()
        .then(results => {
            //console.log(results);
            //Now we want to take the information and use the method paint, so the idea is, it is painting the ui with the results we get
            ui.paint(results);
        })
        .catch(err => console.log(err));
}