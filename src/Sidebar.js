import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import './styles/Sidebar.css';
import Home from "./components/pages/Home";
import Editing from "./components/pages/Editing";
import Pictures from "./components/pages/Pictures";
import Find from "./components/pages/Find";
import Recipes from "./components/pages/Recipes";

const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div className={"activePage"}>Etusivu</div>,
        main: () => <Home/>

    },

    {
        path: "/recipes",
        sidebar: () => <div className={"activePage"}>Reseptit</div>,
        main: () => <Recipes/>
    },

    {
        path: "/editing",
        sidebar: () => <div className={"activePage"}>Muokkaus</div>,
        main: () => <Editing/>
    },
    {
        path: "/pictures",
        sidebar: () => <div className={"activePage"}>Kuvia</div>,
        main: () => <Pictures/>
    },
    {
        path: "/find",
        sidebar: () => <div className={"activePage"}>Hae</div>,
        main: () => <Find/>
    }
];

export default function SidebarLeft() {
    return (
        <Router>
            <div className="sidebar" style={{ display: "flex" }}>
                <div className="sidebartesti"
                    style={{
                        padding: "10px",
                        background: "#ffa500",
                    }}
                >
                    <ul className="sidebarLinks">
                        <li>
                            <Link to="/">ETUSIVU</Link>
                        </li>
                        <li>
                            <Link to="/recipes">RESEPTIT</Link>
                        </li>
                        <li>
                            <Link to="/editing">MUOKKAUS</Link>
                        </li>
                        <li>
                            <Link to="/pictures">KUVIA</Link>
                        </li>
                        <li>
                            <Link to="/find">HAE</Link>
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

                <div style={{ flex: 1, padding: "30px", overflow: "scroll"}} className="sidebarPages">
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
