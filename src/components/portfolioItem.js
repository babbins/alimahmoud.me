import React, { Component } from 'react';
import './portfolio.css';
export default class PortfolioItem extends Component {
  render () {
    const { data } = this.props;
    return (
      <div className="col">
        <a href={data.link}>
          <h3>{data.name}</h3>
          <img alt="portfolio-img" src={data.img}></img>
        </a>
        <p>{data.description}</p>
      </div>
    )
  }
}
