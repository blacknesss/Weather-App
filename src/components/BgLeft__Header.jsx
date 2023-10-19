import img1 from '../assets/WeatherIcon - 2-40.svg'

function BgLeft__Header({check, clickC, clickF, handlerCheckbox}) {
    


    return ( 
        <div className='BgLeft__Header'>
            <img src={img1} alt="tech" />
            <input 
            className='checkbox1' 
            type="checkbox" 
            id="check"
            checked = {check}
            onChange={handlerCheckbox}
            />
            <label htmlFor='check' className='FC' >
                <p className='F' onClick={clickF}>F</p>
                <p className='C' onClick={clickC}>C</p>
            </label>
        </div>
     );
}

export default BgLeft__Header;