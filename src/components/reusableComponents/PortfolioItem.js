import React from 'react';

export default function PortfolioItem(props){
  let data = props.data;
  const techMap = data.tech.map((data, key) => <React.Fragment key={key}>
    <div className="product-tech-item">
      <i className={data.icon}></i>{data.name}
    </div>
  </React.Fragment>)
  return(
    <div className="portfolio-item">
      <div className="portfolio-item-image w50">
        <img
          className="product-image"
          src={data.image}
          alt=""
        />
      </div>
      <div className="portfolio-item-information w50">
        <div className="product-title">
          <h1 className="product-title-title">{data.title}</h1>
          {data.desc}
        </div>
        <div className="product-contribution">
          <h1 className="product-contribution-title fw-600">Role</h1>
          {data.role}
        </div>
        <div className="product-tech">
          {techMap}
        </div>
        <div className={data.githubDisable ? "product-link-list noselect cursor-not-allowed" : "product-link-list"}>
          <a href={data.github} className={data.githubDisable ? "product-link link-unavailable" : "product-link"}>
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  )
}
