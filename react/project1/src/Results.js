function Results(){
let total = parseInt(props.physics) + parseInt(props.chemistry) + parseInt(props.maths)
let per = total*100/450
let results=""

if (per>=90){
    results="A+"
}
if (per>=80 && per<=90){
    results="A"
}
if (per>=70 && per<=80){
    results="B"
}
if (per>=60 && per<=70){
    results="C"
}
if (per<60){
    results="Fail"
}

return(
    <>
        <h2><center> Results Sheet</center></h2>
        <h3> Student Name:{props.name} </h3>
        <table>
            <tr>
                <td>Total Marks</td>
                <td> <b> {total} </b></td>
            </tr>
            <tr>
                <td>Percentage</td>
                <td> <b> {per}% </b></td>
            </tr>
            <tr>
                <td>Results</td>
                <td> <b> {results} </b></td>
            </tr>
        </table>
    
    </>
)
}