function Results(){

    let name =Alexander
    let num1 =70
    let num2 =60
    let num3 =50

    let Results= num1 + num2 + num3
    let Percentage = (Results/300) * 100
    let Year
    return(
        <>
            <table>
                <tr>
                    <td> Name</td>
                    <td> {name} </td>
                </tr>
                <tr>
                    <td> Physics</td>
                    <td> {num1} </td>
                </tr>
                <tr>
                    <td> Chemistry</td>
                    <td> {num2} </td>
                </tr>
                <tr>
                    <td> Maths</td>
                    <td> {num3} </td>
                </tr>
                <tr>
                    <td> Results</td>
                    <td> {Results} </td>
                </tr>
                <tr>
                    <td> Percentage</td>
                    <td> {Percentage} </td>
                </tr>
            </table>
        
        </>
    )



}