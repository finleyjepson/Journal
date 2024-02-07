import { Link } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    Home
                </Link>
                <Link className="navbar-item" to="/category">
                    Category
                </Link>
            </div>
        </nav>
    )
}

export default NavBar