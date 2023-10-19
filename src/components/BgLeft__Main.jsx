import React from 'react';
import icon from '../assets/wind-direction-icon.svg'
import hum from '../assets/hum.svg';
import rain from '../assets/Group 656.svg'
import { useSelector } from 'react-redux';

function BgLeft__Main({check}) {

    const data = useSelector(state => state.data)

    const date = new Date();
    
    let year = date.getFullYear();
    const getDate = () =>{
        if(year === 2023){
            return 23
        }
        else if(year === 2024){
            return 24
        }
    }
    
    let month = date.getMonth();
    const getMonth = () =>{
        if(month === 9){
            return 'Oct'
        }
    }

    let day = date.getDate();
    const changeTH = () =>{
        if(day === 1){
            return 'st'
        }
        else if(day === 2){
            return 'nd'
        }
        else if(day === 3){
            return 'rd'
        }
        else{
            return 'th'
        }
    }

    let time = (date.getHours() + ':' + date.getMinutes())

    let dayof = date.getDay()
    const changeDayOf = () =>{
        if(dayof === 1){
            return 'Monday'
        }
        else if(dayof === 2){
            return 'Tuesday'
        }
        else if(dayof === 3){
            return 'Wednesday'
        }
        else if(dayof === 4){
            return 'Thursday'
        }
        else if(dayof === 5){
            return 'Friday'
        }
        else if(dayof === 6){
            return 'Saturday'
        }
        else if(dayof === 0){
            return 'Sunday'
        }
    }

let c = data !== undefined ? data.main.temp : ''
    const cToF = () => {
        const w = 1.8;
        const b = 32;
        const f = Math.round(c * w + b); 
        return f; 
    };



    return ( 
        <div>
            <h1 className="line2">{Math.round(check ? c : cToF())}<span className='upper-mini'>° {check ? 'C' : 'F'}</span></h1>
            <p className="line3">{day}{changeTH()} {getMonth()} '{getDate()}</p>
            <p className="line4">{changeDayOf()} | {time}</p>
            <div style={{display:"flex"}}>
                <div className="line5-div">
                    <img src={icon} alt="tech" />
                    <p className="line5">Wind {Math.round(data !== undefined ? data.wind.speed : '')} km/h</p>
                </div>

                <div className="line5-div">
                    <img src={hum} alt="t" />
                    <p className="line5">Hum {data !== undefined ? data.main.humidity : ''} %</p>
                </div>

                <div className="line5-div">
                    <img src={rain} alt="t" />
                    <p className="line5">Rain 0,2%</p>
                </div>
            </div>
        </div>
     );
}

export default BgLeft__Main;