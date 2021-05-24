import React from 'react';
import WeatherCard from '../../weatherCards/weatherCard';
import WeatherCardPlug from '../../weatherCards/weatherCardPlug';
import Api from '../../../utils/api';
import {BASEURL_PAST, APIKEY, selectWeatherPast} from '../../../utils/constans';
import {IdataForReq, IWeatherInfoPast} from "../../../types/types";


const WeatherPast:React.FC = () =>{

    const [dataForReq, setDataForReq] = React.useState<IdataForReq>({
        lat: '',
        lon: '',
        dt: ''
    });

    const [minDate, setMinDate] = React.useState<string>('');
    const [maxDate, setMaxDate] = React.useState<string>('');
    const [weatherInfo, setWeatherInfo] = React.useState<IWeatherInfoPast>({
        date: '',
        weather: '',
        icon: ''
    })


    const {date, weather, icon} = weatherInfo;

    React.useEffect(() => {
 
    }, [weatherInfo])

    React.useEffect(() => {
        handleMinDate();
        handleMaxDate();
    }, [minDate, maxDate])


     React.useEffect(() => {
        const {lat, lon, dt } = dataForReq;
        if(lat && lon && dt ){
            const api =  new Api (BASEURL_PAST, lat, lon, dt, APIKEY);
            api.weatherForPast()
            .then(data => setWeatherInfo({
                        date: dt,
                        weather: data.current.temp,
                        icon: data.current.weather[0].icon
                        }))
                    .catch(err => console.log(err))
        }
    }, [dataForReq])

    const handleChange = (e:any) => {
        const {lat, lon, dt } = dataForReq;

        if (e.target === document.querySelector('input[type=date]')) {
            const dtVal = e.target.value;
            const dtValUnix = new Date(dtVal).getTime() / 1000;
            setDataForReq({...dataForReq, 
                            dt: ""+dtValUnix})
                            
        } else if(e.target === document.querySelector(selectWeatherPast)){
                const latVal = e.target[e.target.selectedIndex].attributes.lat.value;
                const lonVal = e.target[e.target.selectedIndex].attributes.lon.value;
                setDataForReq({...dataForReq, 
                    lat:latVal,
                    lon:lonVal})
        }
    }

    function handleMinDate(){
        let date = new Date();
        const minDateUnix =  date.setDate(date.getDate()-5); //unix time
        let minDateUtc = new Date(minDateUnix);
        setMinDate(`${minDateUtc.getFullYear()}-0${minDateUtc.getMonth()+1}-${minDateUtc.getDate()}`);
    }

    function handleMaxDate() {
        let date = new Date();
        setMaxDate(`${date.getFullYear()}-0${date.getMonth()+1}-${date.getDate()}`);
    }

    return (
        <>
        <div className="weather__widget">
        <h2 className="weather__header">Forecast for a Date in the Past</h2>
            <div className="weather__inputs">{/*@ts-ignore*/}
                <select id="city__past"  className="weather__select" name="city__past" type="text" onChange={handleChange}>
                <option selected disabled>Select city</option>
                    {/*@ts-ignore*/}
                    <option lat={'53.195873'} lon={'50.100193'}>Самара</option>
                    {/*@ts-ignore*/}
                    <option lat={'53.507836'} lon={'49.420393'}>Тольятти</option>
                    {/*@ts-ignore*/}
                    <option lat={'51.533557'} lon={'46.034257'}>Саратов</option>
                    {/*@ts-ignore*/}
                    <option lat={'55.796127'} lon={'49.106405'}>Казань</option>
                    {/*@ts-ignore*/}
                    <option lat={'45.035470'} lon={'38.975313'}>Краснодар</option>
                </select>
                <input className="weather__input" type="date" placeholder="Date" min={minDate} max={maxDate} onChange={handleChange}/>
                </div>
               { (date && weather && icon ? (<WeatherCard info = {weatherInfo}/>) : (<WeatherCardPlug/>))}
        </div>
        </>
        
    )
}

export default WeatherPast;