import "./Header.scss";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <header>
      <Link to="/projects"><h3>Lyric Library</h3></Link>

      <div className="avatar"></div>
    </header>
  );
};

export default Header;
