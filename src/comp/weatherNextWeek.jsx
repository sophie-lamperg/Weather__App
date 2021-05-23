import React from 'react';
import WeatherCard from './weatherCard';
import WeatherCardPlug from './weatherCardPlug';
import WeatherCardWeek from './weatherCardWeek';
import Api from '../utils/api';
import {BASEURL_WEEK, APIKEY, selectWeatherWeek} from '../utils/constans';

export default function WeatherNextWeek(){

    //slider state and utils
    const slider = React.useRef(null);
    const [prev, setPrev] = React.useState(false);
    const [next, setNext] = React.useState(false);
    let position = 0;

    //state for request to weather API
    const [dataForReq, setDataForReq] = React.useState({
        lat: '',
        lon: '',
        dt: ''
    });

    //state with array of weather on the week
    const [weatherWeek, setWeatherWeek] = React.useState([])



    React.useEffect(() => {
        const {lat, lon, dt } = dataForReq;
        if(lat && lon && dt ){
            // reqToApi(lat, lon, dt);
            const api = new Api(BASEURL_WEEK, lat, lon, dt, APIKEY);
            api.weatherOnWeek()
                .then(data => setWeatherWeek(data.daily))
                .catch(err => console.log(err))
        }
    }, [dataForReq])

    React.useEffect(() => {
        setEventListeners();
    }, [weatherWeek])

    function handleChange(e){
        const {lat, lon, dt } = dataForReq;

    if(e.target === document.querySelector(selectWeatherWeek)){
                const latVal = e.target[e.target.selectedIndex].attributes.lat.value;
                const lonVal = e.target[e.target.selectedIndex].attributes.lon.value;
                const currentDate =  new Date();
                const currentDateUnix =  currentDate.setDate(currentDate.getDate());
                setDataForReq({...dataForReq, 
                    lat:latVal,
                    lon:lonVal,
                    dt:currentDateUnix
                })
        }
    }
    function handlerPrev () {
        if(position === 0) {
            setPrev(true);
        } else {
            position += 184;
            setPrev(false);
            slider.current.childNodes.forEach((elem)=> {
                elem.style = `transform: translateX(${position}px)`;
            })
        }
    }

    function handlerNext () {
        if(position === -1288) {
            setNext(true);
            setPrev(false);
        } else {
            setPrev(false);
            position -= 184;
            slider.current.childNodes.forEach((elem)=> {
                elem.style = `transform: translateX(${position}px)`;
            })
        }
    }

    function setEventListeners() {
        document.addEventListener('keydown', handleArrowBtn);

    }
    function handleArrowBtn(e){
        if(e.key === 'ArrowLeft') {
            handlerPrev();
        } else if(e.key === 'ArrowRight') {
            handlerNext();
        }
    }


    return (
        <>
        <div className="weather__widget">
        <h2 className="weather__header">7 Days Forecast</h2>
        <div className="weather__inputs">
            {/* <form action=""> */}
                <select id="city__week" className="weather__select" type="text" onChange={handleChange}>
                <option selected disabled>Select city</option>
                    <option lat={'53.195873'} lon={'50.100193'}>Самара</option>
                    <option lat={'53.507836'} lon={'49.420393'}>Тольятти</option>
                    <option lat={'51.533557'} lon={'46.034257'}>Саратов</option>
                    <option lat={'55.796127'} lon={'49.106405'}>Казань</option>
                    <option lat={'45.035470'} lon={'38.975313'}>Краснодар</option>
                </select>
                </div>
                {!weatherWeek.length && (<WeatherCardPlug />)}
                {weatherWeek.length > 0 && (
                <div className="slider">
                    <div className="slider__track"  ref={slider}>
                      {weatherWeek.map((card) => (
                     <WeatherCardWeek key={card.dt} info = {card} style = 'slider' />))}
                    </div>
                   <button className="slider__button slider__button_prev"onClick={handlerPrev}></button>
                   <button className="slider__button slider__button_next"onClick={handlerNext}></button>
                   </div>)
                   }
        </div>
        </>
    )
}
