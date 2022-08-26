import React from 'react';

const count = 8;

const average = (days) => {
  if(days && days.length){
    return Math.round(days.reduce(function (a, b) { return a + b }) / days.length)
  }
  return 0;
}

const SummaryTable = ({ counts }) => {
    return (
      <div className="summary-table">
        <table className="One">
          <tbody className="summary-table-body">
            <tr>
              {counts && counts.map((ele, idx) => 
                <td key={idx} className={Number(average(ele.days)) > count ? "red" : "green"}>
                  Days at {ele.name} <br></br>
                  <h1>{average(ele.days)}</h1>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default SummaryTable;
  