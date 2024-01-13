import "./Header.scss";
import { Link } from "react-router-dom";
import icon_book from "../Media/icon-book.svg";
import icon_metronome from "../Media/icon-metronome.svg";

const Header = ({ user }) => {
  return (
    <header>
      <Link to="/projects">
        <h3>Lyric Library</h3>
      </Link>
      <div className="header-right">
        <div className="tools-container">
          <img src={icon_book} />
          <img src={icon_metronome} />
        </div>

        {user && <div className="avatar"></div>}
      </div>
    </header>
  );
};

export default Header;
