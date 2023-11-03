import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar"

export default function MainLayout(){
    return(
        <>
            <NavBar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}