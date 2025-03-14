import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Record = (props)=>{
    <tr>
        <td>
            {props.record.name}
        </td>
        <td>
            {props.record.position}
        </td>
        <td>
            {props.record.level}
        </td>
        <td>
            <div>
                <Link></Link>
            </div>
        </td>
    </tr>
}