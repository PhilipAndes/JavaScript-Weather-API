class Storage {
    constructor() {
        this.city;
        this.country;
        // Default city and country if there is nothing in local storage
        this.defaultCity = 'Breda';
        this.defaultCountry = 'Netherlands';
    }

    // We are going to have 2 methods, get and set location data:

    //Get Location data
    getlocationData() {
        // So to get the location we are going to check if the city and country data in local storage is null, if it is we want to set them to the default we asigned above and else to the data putted in
        if(localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }
        // Same for country:
        if(localStorage.getItem('country') === null) {
            this.country = this.defaultCountry;
        } else {
            this.country = localStorage.getItem('country');
        }

        // Then return the data
        return {
            city: this.city,
            country: this.country
        }
    }

    //Set location data
    setLocationData(city, country) {
        // We both saving city and country as a string so we dont have to use json to stringify or parse etc
        //We just save 'city' as city
        localStorage.setItem('city', city);
        //And just save 'country' as country
        localStorage.setItem('country', country);
    }
}