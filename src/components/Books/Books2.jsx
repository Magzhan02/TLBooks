import React from 'react';

function Books2({ data }) {
  return (
    <div className="bk-content">
      <article>
        <div className="book-desc">
          <img src={data.book_image} alt="book_image" />
          <div className="book-cont">
            <h2>{data.title}</h2>
            <h3>{data.published_date}</h3>
            <div className="overview">{data.description}</div>
            <div className="book-info">
              <div className="author">author: {data.author}</div>
              <div className="publisher">publisher: {data.publisher}</div>
            </div>
          </div>
        </div>
        <div className="book-tool">
          <div className="btn link">
            <a href={data.buy_links[0].url} target="_blank">
              buy link
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Books2;