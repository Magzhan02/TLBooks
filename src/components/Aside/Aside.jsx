import React from 'react';

function Aside({ data }) {
  return (
    <aside className="aside-right">
      <div className="tab-content">
        <div className="story-cont">
          <span>{data.title}</span>
          <span className="hist-author">{data.author}</span>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
