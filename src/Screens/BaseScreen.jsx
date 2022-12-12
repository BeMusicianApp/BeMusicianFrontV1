import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import "../css/default.css"

const BaseScreen = () => {

    return (
        <>

            <Header />
            <main className="main">
            <Outlet />
            </main>
            <Footer />
        </>
    );
};
export default BaseScreen;