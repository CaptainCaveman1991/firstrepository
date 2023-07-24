

function adding(){

    let num1 =20
    let num2 =30

    let C= num1 + num2

    return(
        <>
            <table>
                <tr>
                    <td> First Number</td>
                    <td> {num1} </td>
                </tr>
                <tr>
                    <td> Second Number</td>
                    <td> {num2} </td>
                </tr>
                <tr>
                    <td> Result</td>
                    <td> {C} </td>
                </tr>
            </table>
        
        </>
    )

}
export default adding;