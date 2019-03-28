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

}