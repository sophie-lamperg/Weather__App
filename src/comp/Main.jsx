import React from 'react';
import WeatherPast from './weatherPast';
import WeatherNextWeek from './weatherNextWeek'

 export default function Main(){
    return (
        <>
        <div className="weathers__container">
          <WeatherNextWeek></WeatherNextWeek>
          <WeatherPast></WeatherPast>
        </div>
       
        </>
    )
} 