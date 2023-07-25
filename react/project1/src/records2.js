function Record2(){
    let employee=[

        {
            "Name":"Alexander",
            "Dept":"IT",
            "Salary":2000
        },
        {
            "Name":"James",
            "Dept":"IT",
            "Salary":2000
        }
    ]
    return(
        <>
            <table>
                {
                    employees.map((record)=>
                                            <tr>
                                                <td>{record.name}</td>
                                                <td>{record.salary}</td>
                                                <td>{record.dept}</td>
                                                <td>{record.salary}</td>



                                            </tr>
                    
                    
                    
                    
                    
                    
                    )






                }






            </table>
        
        </>


    )



}