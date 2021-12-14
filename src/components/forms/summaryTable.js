import React from 'react';

const count = 8;

const SummaryTable = ({ counts }) => {
    return (
      <div className="summary-table">
        <table className="One">
          <tbody className="summary-table-body">
            <tr>
              {counts && counts.map((ele, idx) => 
                <td key={idx} className={Number(ele.days) > count ? "red" : "green"}>
                  Days at {ele.name} <br></br>
                  <h1>{ele.days || 0}</h1>
                </td>
              )}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  
  export default SummaryTable;
  