export default class Api {

    constructor(url, lat, lon, dt, key){
        this.url = url;
        this.lat = lat;
        this.lon = lon;
        this.dt = dt;
        this.Apikey = key;
    }

    handleOriginalResponse(res) {
        if (!res.ok) {
            return Promise.reject(`Error: ${res.status}`);
        }
        return res.json();
    }

     weatherOnWeek() {
        return fetch(`${this.url}lat=${this.lat}&lon=${this.lon}&dt=${this.dt}&appid=${this.Apikey}`)
        .then(this.handleOriginalResponse);
    }


     weatherForPast() {
        return fetch(`${this.url}lat=${this.lat}&lon=${this.lon}&dt=${this.dt}&appid=${this.Apikey}`)
        .then(this.handleOriginalResponse);
    }
}


