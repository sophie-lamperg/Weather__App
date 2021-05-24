import React from 'react';
import {IWeatherUpData} from "../../types/types";

interface CardProps {
    info:{dt:any; temp:{max:string}; weather:object[]};
    style:string
}

const WeatherCardWeek : React.FC<CardProps> = ({info, style}) => {
    const {dt, temp, weather} = info;
    const { max } = temp;
    const { icon }:any = weather[0];
    let dateUtc:any = new Date(+dt * 1000);
    let weatherCels:number = Math.round(+max - 273.15);

    const month:string = `${dateUtc.getMonth()+1}`;
    const months:any = {
        1: 'jan',
        2: 'feb',
        3: 'mar',
        4: 'apr',
        5: 'may',
        6: 'jun',
        7: 'jul',
        8: 'aug',
        9: 'sep',
        10: 'oct',
        11: 'nov',
        12: 'dec'
    }
    const transformMonth:any = months[month];
    return (
        <>
           <div className={`weather__card ${style ? "weather__card_"+style : ''}`}>
            <div className="weather__date">{`${dateUtc.getDate()} ${transformMonth} ${dateUtc.getFullYear()}`}</div>
            <div className={`weather__icon ${style ? "weather__icon_"+style : ''}`}>
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
            </div>
            <div className="weather__temp">{`${weatherCels > 0 ? "+" + weatherCels : weatherCels}`}</div>
        </div>
        </>
    )
}

export default WeatherCardWeek;