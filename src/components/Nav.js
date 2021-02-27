import { Link, withRouter } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="navbar" id="Navbar">
          <Link id="link" to="/giphy">
            <p id="Nav-txt"><span>GIFs</span></p>
          </Link>
          <Link id="link" to="/movies">
            <p id="Nav-txt"><span>Movies</span></p>
          </Link>
          <p id="mega">MEGA</p>
          <Link id="link" to="/jokes">
            <p id="Nav-txt"><span>Jokes</span></p>
          </Link>
          <Link id="link" to="/weather">
            <p id="Nav-txt"><span>Weather</span></p>
          </Link>
      </nav>
    </div>
  )
};

export default withRouter(Nav);