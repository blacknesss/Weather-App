import { useSelector } from 'react-redux';
import arrow from '../assets/Group 657.svg';

function BgRight__Main() {
    const data = useSelector(state => state.data);

    const date = new Date()
    let nowHours = date.getHours()
    let nowMinutes = date.getMinutes()

    const sunrise = new Date( 1000 * (data !== undefined ? data.sys.sunrise : ''))
    let sunriseHours = sunrise.getHours();
    let sunriseMinutes = sunrise.getMinutes();

    const sunset = new Date( 1000 * (data !== undefined ? data.sys.sunset : ''))
    let sunsetHours = sunset.getHours();
    let sunsetMinutes = sunset.getMinutes();

    return ( 
        <div className="BgRight__Main">
            <div className="sunrise">
                <h1 className='sun'>Sunrise</h1>
                <div className='sunr'>
                    <img src={arrow} alt="tech"/>
                    <p className='timeNow'>{sunriseHours}:{sunriseMinutes}</p>
                    <p className='timeSunrise'>{nowHours}:{nowMinutes}</p>
                </div>
            </div>

            <div className="golden">
                <h1 className='sun'>Golden Hour</h1>
                <div className='gol'>
                    <img src={arrow} alt="tech"/>
                    <p className='timeNow'>6:00</p>
                    <p className='timeSunrise'>{nowHours}:{nowMinutes}</p>
                </div>
            </div>

            <div className="sunrise">
                <h1 className='sun'>Sunset</h1>
                <div className='sunr'>
                    <img src={arrow} alt="tech"/>
                    <p className='timeNow'>{sunsetHours}:{sunsetMinutes}</p>
                    <p className='timeSunrise'>{nowHours}:{nowMinutes}</p>
                </div>
            </div>
        </div>
     );
}

export default BgRight__Main;