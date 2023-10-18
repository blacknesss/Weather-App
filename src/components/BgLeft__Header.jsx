import { useState } from 'react';
import img1 from '../assets/WeatherIcon - 2-40.svg'

function BgLeft__Header() {
    const [check, setCheck] = useState(true)

    const anim1 = () =>{
        

    }
    const handlerCheckbox = (e) =>{
        e.preventDefault();
    }

    return ( 
        <div className='BgLeft__Header'>
            <img src={img1} alt="tech" />
            <input 
            className='checkbox1' 
            type="checkbox" 
            id="check"
            
            />
            <label htmlFor='check' className='FC' >
                <p className='F'>F</p>
                <p className='C'>C</p>
            </label>
        </div>
     );
}

export default BgLeft__Header;