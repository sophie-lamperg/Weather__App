import React from 'react';

interface CardProps {
    info:{date:string; weather:string; icon:string};
}

const WeatherCard: React.FC<CardProps> = ({info}) => {
    const {date, weather, icon} = info;
    let dateUtc:any = new Date(+date * 1000);
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
    const transformMonth:string = months[month];
    let weatherCels:number = +`${Math.round(+weather - 273.15)}`;
    
    return (
        <>
        <div className="weather__card">
            <div className="weather__date">{`${dateUtc.getDate()} ${transformMonth} ${dateUtc.getFullYear()}`}</div>
            <div className="weather__icon">
                <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}></img>
            </div>
            {/* <div className="weather__icon">{(new Date(dateUtc/1000))}</div> */}
            <div className="weather__temp">{`${weatherCels > 0 ? "+" + weatherCels : weatherCels}`}</div>
        </div>
        </>
    )
}

export default WeatherCard;