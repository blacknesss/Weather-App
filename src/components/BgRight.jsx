import BgRight__Header from "./BgRight__Header";
import BgRight__Main from "./BgRight__Main";
import BgRight__Footer from "./BgRight__Footer";
import BgRight__Line from "./BgRight__Line";

function BgRight() {
    return ( 
        <div className="BgRight">
            <BgRight__Header/>
            <BgRight__Main/>
            <BgRight__Line/>
            <BgRight__Footer/>
        </div>
     );
}

export default BgRight;