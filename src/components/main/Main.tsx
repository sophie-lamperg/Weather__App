import React from 'react';
import WeatherPast from '../weatherWidgets/weatherPast/weatherPast';
import WeatherNextWeek from '../weatherWidgets/weatherOnNextWeek/weatherNextWeek';

const Main: React.FC = () => {
    return (
        <>
        <div className="weathers__container">
          <WeatherNextWeek></WeatherNextWeek>
          <WeatherPast></WeatherPast>
        </div>
       
        </>
    )
}

export default Main;