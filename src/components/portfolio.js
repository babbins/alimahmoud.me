import React, { Component } from 'react';
import portfolioData from '../portfolio.json';
import PortfolioItem from './portfolioItem';
import './portfolio.css'
export default class Portfoloio extends Component {

  render () {
    return (
      <div className="flex-grid">
        {portfolioData.map(item => (
          <PortfolioItem key={item.name} data={item} />
        ))}
      </div>
    )
  }
}
