import CardInstrument from "../Components/CardInstrument";
import '../css/instrument.css'


const ChoixInstrumentScreen = () => {

    return (
        <div className="instrumentGlobal">
                    <CardInstrument title="Guitare" lien="/guitare" src={process.env.PUBLIC_URL + '/img/site/guitare.jpeg'} />
                    <CardInstrument title="Piano" lien="/piano" src={process.env.PUBLIC_URL + '/img/site/piano.jpeg'} />
        </div>
    );
};
export default ChoixInstrumentScreen;