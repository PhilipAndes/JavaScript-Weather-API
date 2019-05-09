// Initialize weather object
const weather = new Weather('Breda', 'Netherlands');
// Initialize UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

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