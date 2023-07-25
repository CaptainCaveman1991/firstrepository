import {useState} from 'react';
function Data2(){
    let records=[
        {
            "name":"James",
            "dept":"HR",
            "salary":567
        },
        {
            "name":"Alexander",
            "dept":"IT",
            "salary":765
        }
    ]
    function addEmployee(){
        records.push({
            "name":"James",
            "dept":"MI6",
            "salary":500
        })
        alert(records.length)
        console.log(records)
    }
    let [employees,setEmployees]=useState(records)
    return(
        <>
                <imput type="button" value="New Employee" onClick={addEmployee}/>
                <table>
                        <tr>
                            <td>Name</td>
                            <td>Department</td>
                            <td>Salary</td>
                        </tr>
                        {
                            employees.map((rec)=>
                            <tr>
                            <td>{rec.name}</td>
                            <td>{rec.department}</td>
                            <td>{rec.salary}</td>
                        </tr>
                            )
                        }
                </table>
            </>
    )
}
export default Data2