import { Link } from "react-router-dom";

const NotFoundScreen = () =>{
    return (
        <div>
            <h1>Oops Houston je croit qu'on a un problème</h1>
            <Link to="/login">Clique sur moi pour te connecter ou te creer un compte :)</Link><br/>
            <Link to="/">Clique sur moi pour revenir sur la page d'acceuil</Link>
        </div>
    );
};
export default NotFoundScreen