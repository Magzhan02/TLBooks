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
      setToggleMenu(true);
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
          <Link to="user">
            <img src="/image/user.svg" alt="user" />
          </Link>
        </li>
        <li onClick={toggleBtn}>
          <div class="navbar" ref={navRef}>
            <div class="container nav-container">
              <input class="checkbox" type="checkbox" />
              <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
              </div>
            </div>
          </div>
          <div className={toggleMenu ? 'green-menu' : 'green-menu close'}>
            <div className="menu-nav">
              <nav>
                <Link to="/">
                  <img src="image/home.svg" alt="home-icon" />
                  Главное
                </Link>
                <Link to="bookmark">
                  <img src="image/bookmark2.svg" alt="home-icon" />
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
