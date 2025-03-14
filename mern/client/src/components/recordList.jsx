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
                <Link>
                    {props.record._id}
                </Link>

                <button
                    color='red'
                    type='button'
                    onClick={()=>{
                        props.deleteRecord(props.record._id)
                    }}>                        
                    Delete                
                </button>
            </div>
        </td>
    </tr>
}

export default ()=>{
    const [records, setRecords] = useState([])

    // fetch records from db
    useEffect(()=>{
        async function getRecords(){
            const response = await fectch('http://localhost:5050/records')

            if(!response.ok){
                const message = 'An error occurred while fetching data'
                console.error(message)
                return
            }

            const records = await response.json()
            setRecords(records)
        }

        getRecords()
        return

    }, [records.length])


    // delete record from db
    async function deleteRecord(id){
        await fetch(`http://localhost:5050/records/${id}`, {
            method: 'DELETE',
        })

        const newRecords = records.filter((elm)=>{elm._id !== id})
        setRecords(newRecords)
    }

    function recordList(){
        return records.map((record)=>{
            return (
                <Record
                    record={record}
                    deleteRecord={()=> deleteRecord(record._id)}
                    key={record._id}
                />                                
            )
        })
    }


}


// display the table with records
return(
    <>
        <h3>Emplopyee records</h3>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Position
                        </th>
                        <th>
                            Level
                        </th>
                        <th>
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {recordList()}
                </tbody>
            </table>

        </div>
    </>
)