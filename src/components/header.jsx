import { Link } from "react-router-dom";

function Header() {
    return(
        <>
        <div className="navbar-fixed">
            <nav className="green lighten-1">
            <div className="nav-wrapper container">
                <Link to="/" classNameName="brand-logo">SPA React Project</Link>
                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/top">Top</Link></li>
                    {/* <li><a href="badges.html">Favorites</a></li> */}
                    <li><Link to="/notifications">Notifications</Link></li>
                </ul>
            </div>

        </nav>
        <ul className="sidenav" id="mobile-demo">
                    <li><Link to="/top">Top</Link></li>
                    {/* <li><a href="badges.html">Favorites</a></li> */}
                    <li><Link to="/notifications">Notifications</Link></li>
            </ul>
            </div>
            </>
    );
}

export {Header};