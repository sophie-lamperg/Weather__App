import './App.css';
import Main from './components/main/Main';

function App() {
    return (
        <div className='page'>
            <div className='page__container'>
                <div className="header__wrapper">
                    <h1 className='header'>Weather <br/><span className="header__text">Forecast</span></h1>
                </div>
                <Main/>
              <div className="page__background_desktop page__background_desktop-top"></div>
              <div className="page__background_desktop page__background_desktop-bottom"></div>
            </div>

            <footer><p className="footer__text">С любовью от MERCURY DEVELOPMENT</p></footer>
        </div>
    );
}

export default App;
