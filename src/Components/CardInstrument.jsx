import { Link } from "react-router-dom";
import '../css/instrument.css'
const CardInstrument = (props) => {
    const {title, lien, src} = props;
    return (
        <div className="intrumentGen">
                    <Link to={`${lien}`} >
            <img className="instrumentImage" src={src} alt="Card image cap"/>
                        </Link>
        </div>
    )
}
export default CardInstrument;