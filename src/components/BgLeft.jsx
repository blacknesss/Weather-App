import BgLeft__Footer from './BgLeft__Footer';
import BgLeft__Header from './BgLeft__Header';
import BgLeft__Main from './BgLeft__Main';



function Bgleft(data) {
    

    return ( 
        <div className="BgLeft">
            <BgLeft__Header/>
            <BgLeft__Main data = {data}/>
            <BgLeft__Footer/>
        </div>
     );
}

export default Bgleft;