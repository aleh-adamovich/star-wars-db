import './Header.css';
import {Link} from "react-router-dom";

const Header = ({btnLabel, onToggleService}) => {
  return (
    <div className="header d-flex">
      <h3>
        <Link to='/'>
          Star Wars DB
        </Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to='/people/'>People</Link>
        </li>
        <li>
          <Link to='/planets/'>Planets</Link>
        </li>
        <li>
          <Link to='/starships/'>Starships</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/secret'>Secret</Link>
        </li>
      </ul>
      <button
        className='btn btn-primary btn-sm'
        onClick={onToggleService}
      >
        {btnLabel}
      </button>
    </div>
  );
};

export default Header;
