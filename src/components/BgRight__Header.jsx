import place from '../assets/Frame.svg';
import search from '../assets/Group 294.svg';
import { useDispatch, useSelector } from 'react-redux';
import { loadState } from '../actions';

function BgRight__Header() {
    const data = useSelector(state => state.data);
    const city = useSelector(state => state.city);
    const dispatch = useDispatch()


    const handler = (e) =>{
        dispatch({
            type: 'city',
            payload: e.target.value
        })
}



    const handleClick = () =>{
        if(city !== ''){
            const newObj = {
                text: city,
            }
            dispatch({
                type: 'city/obj',
                payload: [...city, newObj]
            })
            dispatch(loadState(city))
        }
        dispatch({
            type: 'null',
            payload: ''
        })
    }
    const inputVisible = () =>{
        let input = document.querySelector('.city-input');
        input.classList.remove('dn');

        let delhi = document.querySelector('.delhi');
        delhi.classList.add('dn');
    }
    
    const delhiAdd = () =>{
        let delhi = document.querySelector('.delhi');
        delhi.classList.remove('dn');

        let input = document.querySelector('.city-input');
        input.classList.add('dn');
    }

    const handlerPress = (e) =>{
        if(e.key === 'Enter'){
            handleClick(e)
            delhiAdd(e)
        }
    }

    return ( 
        <div className="BgRight__Header">
            <img src={place} alt="tech"/>
            <h1 onClick={inputVisible} className="delhi dn">{data !== undefined ? data.name : 'Set Country'}
            {data !== undefined ? ', '+data.sys.country : ''}</h1>

            <input 
            className='city-input' 
            onChange={(e)=>{handler(e)}} 
            placeholder='Enter City Name' 
            type="text" 
            onKeyDown={handlerPress}
            value={city || ''} />
            <button className={city === undefined ? 'dn' : ''} onClick={handleClick}>
                <img onClick={delhiAdd} src={search} alt="tech"/>
            </button>
        </div>
     );
}

export default BgRight__Header;