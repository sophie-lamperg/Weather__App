import React from 'react';
// @ts-ignore
import defaultWeatherIcon from '../img/Placeholder/Academy-Weather-bg160.svg';

export default function WeatherCardPlug() {
    return (<>
      <div className="weather__card weather__card_default">
            <div className="weather__icon">
                <img src={defaultWeatherIcon}></img>
            </div>
            {/* <div className="weather__icon">{(new Date(dateUtc/1000))}</div> */}
            <div className="weather__title">Fill in all the fields and the weather will be displayed</div>
        </div>
    </>)
}