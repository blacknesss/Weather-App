import group from '../assets/Group 650.svg';
import line17 from '../assets/Line 17.svg';

function BgLeft__Footer() {
    let offset = 0;

    const slider = () =>{
        const containerF = document.querySelector('.little-foot');
        offset = offset +=173;
        if(offset > 519){
            offset = 0
        }
        containerF.style.transform = `translateX(${-offset}px)`;
    }

    return ( 
        <div className="Footer">
            <div className='little-foot'>
            <div className="container-f">
                <h1 className='up'>24°C</h1>
                <img src={group} alt="t" />
                <h1 className='up'>Fri</h1>
            </div>
            <div className="container-f">
                <h1 className='up'>24°C</h1>
                <img src={group} alt="t" />
                <h1 className='up'>Sat</h1>
            </div>
            <div className="container-f">
                <h1 className='up'>24°C</h1>
                <img src={group} alt="t" />
                <h1 className='up'>Sun</h1>
            </div>
            <div className="container-f">
                <h1 className='up'>24°C</h1>
                <img src={group} alt="t" />
                <h1 className='up'>Mon</h1>
            </div>
            <div className="container-f">
                <h1 className='up'>24°C</h1>
                <img src={group} alt="t" />
                <h1 className='up'>Tue</h1>
            </div>
            <div className="container-f">
                <h1 className='up'>24°C</h1>
                <img src={group} alt="t" />
                <h1 className='up'>Wed</h1>
            </div>
            <div className="container-f">
                <h1 className='up'>24°C</h1>
                <img src={group} alt="t" />
                <h1 className='up'>Thu</h1>
            </div>
            </div>
            <div onClick={slider} className='line-next'><img src={line17} alt="err" /></div>
        </div>
     );
}

export default BgLeft__Footer;