import React from 'react';
import { parseDate } from '../../utils';

const Intro = ({currentDate}) => {  
    return (
      <div>
        <div className="main">
          <div className="page-header">
            <h1 className="date">{parseDate(currentDate)}</h1>
            <h2 className="store-name">Ford Doylestown</h2>
            <h3 className="page-description">
              7 Day Rolling Average of cars on the front line
            </h3>
          </div>
        </div>
      </div>
    );
  }
  
  export default Intro;
