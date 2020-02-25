import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './Sidebar.css';
import Home from "./Home";
import Editing from "./Editing";
import Pictures from "./Pictures";

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>Etusivu</div>,
        main: () => <Home/>

    },
    {
        path: "/editing",
        sidebar: () => <div>Muokkaus</div>,
        main: () => <Editing/>
    },
    {
        path: "/pictures",
        sidebar: () => <div>Kuvia</div>,
        main: () => <Pictures/>
    }
];

export default function SidebarLeft() {
    return (
        <Router>
            <div className="sidebar" style={{ display: "flex" }}>
                <div
                    style={{
                        padding: "10px",
                        // width: "40%",
                        background: "lightgray",
                    }}
                >
                    <ul className="sidebarLinks">
                        <li>
                            <Link to="/">ETUSIVU</Link>
                        </li>
                        <li>
                            <Link to="/editing">MUOKKAUS</Link>
                        </li>
                        <li>
                            <Link to="/pictures">KUVIA</Link>
                        </li>
                    </ul>

                    <Switch>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.sidebar />}
                            />
                        ))}
                    </Switch>
                </div>

                <div style={{ flex: 1, padding: "30px" }}>
                    <Switch>
                        {routes.map((route, index) => (

                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                children={<route.main />}
                            />
                        ))}
                    </Switch>
                </div>
            </div>
        </Router>


    );

}
