import React from 'react'

function TableRow(props) {
    return (
        <tr>
            <td>{updateDateFormat(props.data.timestamp)}</td>
            <td>{props.data.oi_ce}</td>
            <td>{props.data.chng_oi_ce}</td>
            <td>{props.data.oi_pe}</td>
            <td>{props.data.chng_oi_pe}</td>
            <td>{props.data.vol_ce}</td>
            <td>{props.data.vol_pe}</td>
        </tr>
    )
}

function updateDateFormat(dateSecond){
    return String(new Date(dateSecond)).substring(0, 28)
}

export default TableRow
