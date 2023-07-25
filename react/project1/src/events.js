
import {useState} from 'react';
function Events(){

let [X,Alexander]=useState(100)
let [data,assignData]=useState(21)

function doSomething(){
    Alexander(++X)


}
function doSomething2(){
    assignData(++data)


}
    return(
        <>
        {}
        <input type="Button" value="Click" onClick={doSomething}/>
        <input type="Button" value="Click2" onClick={doSomething2}/>

        <h1>{X}</h1>
        <h1>{data}</h1>
        </>
    )
}

export default Events;