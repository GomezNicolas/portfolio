class Weather{
    constructor(API_KEY){
        this.API_KEY = API_KEY; 
        this.initialize();
    }

    initialize(){
        this.getMyLocation();
    }
    getMyLocation(){
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
        }, err => {
            console.log(err);
        } );
    }

    getWeather(lat, lng){
        //AJAX API CALL
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        //Lukt fetch? return in json
        .then(response => {
            return response.json(); //proberen json dan return
        })
        .then(json => {
            let summary = document.querySelector(".weather-description");
            summary.innerHTML = `Current Weather: <span>${json.currently.summary}</span>`;
            let temp = document.querySelector(".temperature");
            let roundedTemp = Math.round(json.currently.temperature);
            temp.innerHTML = `${roundedTemp} °C`;

            let searchword = json.currently.icon;

            let images = new Images('34c276038436e4cdc55315b27a951cc38e93e61231b430374e3f3664b7916afa', searchword);
        })
    }
}

class Images{
    constructor(CLIENT_KEY, summaryValue){
        this.CLIENT_KEY = CLIENT_KEY;
        this.searchword = summaryValue;
        this.initialize();
    }

    initialize(){
        this.getImages();
    }

    getImages(){
        let url = `https://api.unsplash.com/search/photos?client_id=${this.CLIENT_KEY}&query=${this.searchword}`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json =>{
            //add overlay class to overlay-div to make text over image clear. This is done here to prevent the overlay color to render before receiving API results.
            let overlay = document.querySelector("#overlayComesHere");
            overlay.setAttribute("class", "overlay");
            //set first image (in full format) returned from API as background-image.
            document.body.style.backgroundImage = `url(${json.results[0].urls.full})`;
            
        })
    }
}