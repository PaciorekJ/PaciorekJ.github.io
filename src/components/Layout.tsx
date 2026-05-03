import { Outlet, useLocation } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
    const location = useLocation();
    const isResumePage = location.pathname === "/resume";

    return (
        <div className={`app-shell ${isResumePage ? "app-shell--resume" : ""}`}>
            <Navbar />
            <main className="page-main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
