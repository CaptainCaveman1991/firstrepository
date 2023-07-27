import {useState} from 'react'

function DataFromWeb(){

    let[records,setRecords]=useState([])

    function getDataFromResponse(data){
        setRecords(data)
    }
    function processResponse(response){
        let jsonPromise = response.json()
        jsonPromise.then(getDataFromResponse)
    }
let responsePromise = fetch('https://jsonplaceholder.typicode.com/comments')
responsePromise.then(processResponse)

return(
    <>
        <h1>Hello Web</h1>
        <table>
            {
            records.map( (rec) =>
            <tr>
                <td> {rec.name} </td>
            </tr> 
            )
}       
        </table>
        </>
)
}

export default DataFromWeb