import './App.css';
// import WeatherPast from './comp/weatherPast';
// import CustomSelectProps from './comp/custom-select-props';
// import MaterialUIPickers from './comp/material-ui-pickers';
import Main from './comp/Main';
function App() {
  return (
    <div className='page'>
      <div className='page__container'>
        <div className="header__wrapper">
          <h1 className='header'>Weather <br/><span className="header__text">Forecast</span></h1>
        </div> 
        <Main/>
    </div>
    <div className="page__background_desktop page__background_desktop-top"></div>
    <div className="page__background_desktop page__background_desktop-bottom"></div>
    </div>
  );
}

export default App;
