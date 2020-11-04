import React, {Component} from 'react';

import PortfolioItem from '../reusableComponents/PortfolioItem'
import {trippieAirData, firstNationalData} from '../../portfolioData/data.js'

export default class Portfolio extends Component {
  render(){
    return(
      <div id="portfolio" className="portfolio">
        <svg className="portfolio-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#f4456a" fillOpacity="1" d="M0,320L48,309.3C96,299,192,277,288,229.3C384,181,480,107,576,117.3C672,128,768,224,864,256C960,288,1056,256,1152,213.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div className="portfolio-content-container">
          <div className="container-middle-content">
            <PortfolioItem data={trippieAirData}/>
            <PortfolioItem data={firstNationalData}/>
          </div>
        </div>
        <svg className="portfolio-waves-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,320L48,309.3C96,299,192,277,288,229.3C384,181,480,107,576,117.3C672,128,768,224,864,256C960,288,1056,256,1152,213.3C1248,171,1344,117,1392,90.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    )
  }
}
