import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-lg-start">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-3 col-md-6 mb-md-0">
                       

                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/presentation" className="text-light">Presentation</Link>
                            </li>
                        
                       
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6  mb-md-0">
                 

                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link to="/explication" href="#!" className="text-light">Explication</Link>
                            </li>
                       
                        
                        </ul>
                    </div>

                   

                   

                </div>

            </div>

            <div className="text-center p-3 bg-dark text-light" >
                © 2022 Copyright:
                <Link to="/">MusicLearn.com</Link>
            </div>

        </footer>



    );
};
export default Footer