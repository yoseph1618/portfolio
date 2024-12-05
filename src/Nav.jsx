import { Link } from 'react-router-dom';
import { capitalizeFirstLetter } from './helpers';

function Nav({ openPage }) {
  const pages = ['portfolio', 'contact', 'resume'];

  return (
    <nav>
      <ul className="flex-row">
        <li
          className={`mx-5 ${openPage === '/' && 'navActive'}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${openPage === `/${Page}` && 'navActive'}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirstLetter(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
