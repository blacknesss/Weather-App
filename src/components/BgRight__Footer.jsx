import quality from '../assets/Frame (1).svg'

function BgRight__Footer() {
    return ( 
        <div className="BgRight__Footer">
            <div className="foot">
                <h1 className="air">Air Quality</h1>
                <img src={quality} alt="t" />
                <h3 className="kolvo">2/5</h3>
                <p className="rezult">Moderate</p>
            </div>

            <div className="foot">
                <h1 className="air">UV Index</h1>
                <img src={quality} alt="t" />
                <h3 className="kolvo">6/10</h3>
                <p className="rezult">High</p>
            </div>
        </div>
     );
}

export default BgRight__Footer;