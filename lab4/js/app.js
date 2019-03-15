class Weather {
    constructor(API_KEY) {
        this.API_KEY = API_KEY;
        console.log("HEYYYYYYYY");
        this.initialize();
    }

    initialize() {
        this.getMyLocation();
    }

    getMyLocation() {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            this.getWeather(lat, lng);
        }, err => {
            console.log(err);
        });
    }

    getWeather(lat, lng) {
        let url = `http://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${this.API_KEY}/${lat},${lng}?units=si`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json.currently.summary);

            //Add type weather to Html
            let type = document.createElement("h1");
            type.innerHTML = json.currently.icon;
            type.setAttribute('class', 'type');
            document.body.appendChild(type);
            //Add summary to html
            let summary = document.createElement("h1");
            summary.innerHTML = json.currently.summary;
            summary.setAttribute('class', 'summary');
            document.body.appendChild(summary);
            //Add temperature to Html
            let temp = document.createElement("h1");
            temp.innerHTML = json.currently.temperature  + " °C";
            temp.setAttribute('class', 'temp');
            document.body.appendChild(temp);



            console.log(json.currently.temperature);
        });
    }
}
/*
class Images{
    constructor(CLIENT_KEY){
        this.CLIENT_KEY = CLIENT_KEY;
    }

    getImages(){
        let url = `https://api.unsplash.com/photos//?client_id=${this.CLIENT_KEY}`;
        fetch(url)
        .then(response => {
            return response.json();
        })
        .then(json => {
            console.log(json.currently.images);
        });
    }
}
let appB = new Images('f1b014868cd769f6dd5451af6fb9dec29c8bcb2b6995660571fcc81a84aa2779')
*/
let app = new Weather('45427da15779ed4d9e2cd8b85e03608f');