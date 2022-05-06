import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Menu() {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const { bookmark } = useSelector(({ books }) => books);

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
          <Link to="user">
            <img src="/image/user.svg" alt="user" />
          </Link>
        </li>
        <li onClick={toggleBtn} ref={navRef}>
          <img src="image/menu.svg" alt="menu-icon" />
          <div className={toggleMenu ? 'green-menu' : 'green-menu close'}>
            <div className="menu-nav">
              <nav>
                <Link to="/">
                  <img src="image/home.svg" alt="home-icon" />
                  <span>Главное</span>
                </Link>
                <Link to="bookmark">
                  <img src="image/bookmark2.svg" alt="home-icon" />
                  <span>
                    Закладка <span className="counter">{bookmark.length}</span>
                  </span>
                </Link>
                <Link to="popular">
                  <img src="image/fire.svg" alt="fire-icon" />
                  <span>Популярное</span>
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
