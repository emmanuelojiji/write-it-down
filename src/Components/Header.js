import "./Header.scss";
import { Link } from "react-router-dom";

const Header = ({ user }) => {
  return (
    <header>
      <Link to="/projects">
        <h3>Lyric Library</h3>
      </Link>

      {user && <div className="avatar"></div>}
    </header>
  );
};

export default Header;
