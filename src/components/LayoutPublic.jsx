import { Outlet } from "react-router-dom";

const LayoutPublic = () => {
    return (
        <div>
            <Nav/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default LayoutPublic;