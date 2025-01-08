import { Outlet } from "react-router-dom";
import Footer from "../pages/footer/footer";
import NavbarPage from "../pages/navbar/Navbar";

export default function Layout(){
    return(
        <>
            <header>
                <NavbarPage />
            </header>
            <main className="w-full mx-auto box-border pt-24">
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
}