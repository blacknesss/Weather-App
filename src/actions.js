const API_KEY = '8194d32d6d2dbf03c77d88bdaf26feb9';

export const loadState = (city, setError) =>{


    return (dispatch) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&mode=json&lang=ru`)
            .then(res => res.json())
            .then(json => {
                dispatch({
                    type: 'data/item',
                    payload: json
                })
      }).catch( err => {
        if(err.response.cod == 404){
            setError('Invalid City Name')
        }else {
            setError('')
        }
        console.log(err)
      })
    }
};