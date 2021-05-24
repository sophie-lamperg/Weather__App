export interface IWeatherUpData {
    info: IWeatherInfo;
    style: string;
}

export interface IWeatherInfo {
    dt:any;
    temp:{max:string};
    weather:object[];
}

export interface IWeatherInfoPast {
    date:any;
    weather:string;
    icon:string;
}

export interface ISliderFlag {
    next?: boolean;
    prev?:boolean;
}

export interface IdataForReq {
    lat: string;
    lon: string;
    dt: string;
}