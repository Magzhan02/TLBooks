import React from 'react';

function Filter() {
  const [open, setOpen] = React.useState(false);

  const setToggle = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className="filter-block">
      <div className="filter-cont">
        <div className="filter-group">
          <label>Ключевое слово</label>
          <input type="text" autoComplete="off" placeholder="Названия книги" />
        </div>
        <button className="showcont-btn" onClick={() => setToggle()}>
          Больше параметров
        </button>
        <div className={open ? 'filter-more open' : 'filter-more'}>
          <div className="filter-combo">
            <div className="form-group">
              <label>Год выпуска от</label>
              <input type="text" className="year" autoComplete="off" placeholder="1990" />
            </div>
            <div className="form-group">
              <label>Год выпуска до</label>
              <input type="text" className="year" autoComplete="off" placeholder="2022" />
            </div>
          </div>
          <div className="filter-combo">
            <div className="form-group">
              <label>Количество страниц от</label>
              <input type="text" className="year" autoComplete="off" placeholder="50" />
            </div>
            <div className="form-group">
              <label>Количество страниц до</label>
              <input type="text" className="year" autoComplete="off" placeholder="1000" />
            </div>
          </div>
          <div className="filter-combo">
            <div className="form-group">
              <label>Язык оригинала</label>
              <div className="checklist">
                <button>Китайский</button>
                <button>Корейский</button>
                <button>Русский</button>
                <button>Японский</button>
                <button>Английский</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-btn">
        <button className="search">Поиск</button>
        <button className="clear">Сбросить</button>
      </div>
    </div>
  );
}

export default Filter;
