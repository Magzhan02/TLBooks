import React from 'react';
import { Link } from 'react-router-dom';
function Menu() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const navRef = React.useRef();
  const toggleBtn = () => {
    if (toggleMenu === false) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };
  const outSideClick = (e) => {
    if (!e.path.includes(navRef.current)) {
      setToggleMenu(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', outSideClick);
  }, []);

  return (
    <menu>
      <ul>
        <li>
          <Link to="/">
            <img src="/image/book.svg" alt="icon" />
          </Link>
        </li>
        <li>
          <img src="/image/user.svg" alt="user" />
        </li>
        <li onClick={toggleBtn} ref={navRef}>
          <img src="/image/menu.svg" alt="menu" />
          <div className={toggleMenu ? 'green-menu' : 'green-menu close'}>
            <div className="menu-nav">
              <nav>
                <Link to="/">
                  <img src="image/home.svg" alt="home-icon" />
                  Главное
                </Link>
                <Link to="bookmark">
                  <img src="image/bookmark.svg" alt="home-icon" />
                  Закладка
                </Link>
                <Link to="popular">
                  <img src="image/fire.svg" alt="fire-icon" />
                  Популярное
                </Link>
              </nav>
            </div>
          </div>
        </li>
        <li>
          <img src="/image/sun.svg" alt="menu" />
        </li>
      </ul>
    </menu>
  );
}

export default Menu;
