import React from 'react'

function TableRow(props) {
    return (
        <tr>
            <td>{props.data.timestamp}</td>
            <td>{props.data.oi_ce}</td>
            <td>{props.data.chng_oi_ce}</td>
            <td>{props.data.oi_pe}</td>
            <td>{props.data.chng_oi_pe}</td>
            <td>{props.data.vol_ce}</td>
            <td>{props.data.vol_pe}</td>
        </tr>
    )
}

export default TableRow
