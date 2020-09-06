import React from 'react'
import '../css/table-row.css';
function TableRow(props) {
    const data = props.data;
    return (
        <tr>
            <td>{changeInCurrencyFormat(data.oi_ce_nifty)}</td>
            { getChangeInOiWithColor(changeInCurrencyFormat(data.chng_oi_ce_nifty)) }
            <td>{changeInCurrencyFormat(data.oi_pe_nifty)}</td>
            { getChangeInOiWithColor(changeInCurrencyFormat(data.chng_oi_pe_nifty)) }
            <td>{changeInCurrencyFormat(data.oi_ce_banknifty)}</td>
            { getChangeInOiWithColor(changeInCurrencyFormat(data.chng_oi_ce_banknifty)) }
            <td>{changeInCurrencyFormat(data.oi_pe_banknifty)}</td>
            { getChangeInOiWithColor(changeInCurrencyFormat(data.chng_oi_pe_banknifty)) }
            <td>{updateDateFormat(props.data.timestamp)}</td>
        </tr>
    )
}

function changeInCurrencyFormat(val){
    if(!val) return "-";
    return val.toLocaleString('en-IN');
}

function updateDateFormat(dateSecond){
    return String(new Date(dateSecond)).substring(0, 28)
}

function getChangeInOiWithColor(val){
    if(!val || val == "-") return (<td>-</td>);
    if(val.indexOf("-")=== 0){
    return (<td className="red">{val}</td>)
    }
    return (<td className="green">{val}</td>)    
}

export default TableRow
