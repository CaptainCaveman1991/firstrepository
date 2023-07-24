


function SalarySlip(props){


    let salary=props.salary
    let tax=0
    if (salary>=1000){
        tax=salary * 21/100
    }
    else{
        tax = salary*15/100

    }

    let net = salary-tax
    return(
        <>
        <h2> Salary Slip of:{props.name}</h2>

        Salary:{salary} <br></br>
        Tax calculated is:{tax} <br></br>
        net salary:{net}
        </>


    )
}

export default SalarySlip;