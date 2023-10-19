import { useState } from 'react';
import BgLeft__Footer from './BgLeft__Footer';
import BgLeft__Header from './BgLeft__Header';
import BgLeft__Main from './BgLeft__Main';



function Bgleft() {
    const [check, setCheck] = useState(true)

    const clickF = () =>{
        setCheck(false)
    }

    const clickC = () =>{
        setCheck(true)
    }

    const handlerCheckbox = (e) =>{
        e.preventDefault();
    }

    return ( 
        <div className="BgLeft">
            <BgLeft__Header 
            check = {check} 
            clickF = {clickF} 
            clickC = {clickC}
            handlerCheckbox = {handlerCheckbox}/>
            <BgLeft__Main
            check = {check}/>
            <BgLeft__Footer/>
        </div>
     );
}

export default Bgleft;