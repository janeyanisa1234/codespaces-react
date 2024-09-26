import {useRef, useState} from "react";
const BmiText=({bmi})=>{
    if(bmi<18.5)return(<h1>UnderWeight</h1>);
    if(bmi<18.5)return(<h1>OverWeight</h1>);
    return(<h1>Normol</h1>);
}
export default function Bmi(){
    const W_input = useRef(null);
    const H_input = useRef(null);
    const [bmi,setBmi]=useState(0.00);
    function handleClick(){
        alert("you typed " +W_input.current.value+ " kg"+" and "+ H_input.current.value)+ " cm";
        let w = W_input.current.value;
        let h = H_input.current.value/100;
 
        setBmi(w/Math.pow(h,2));
    }
    return (<>
    Weight: <input ref={(W_input)}/> kg.
    <br/>
    Height: <input ref={(H_input)}/> cm.
    <br/>
    <button onClick = {handleClick}>Calculate</button>
    <br/>
    BMI Value: {bmi.toFixed(2)}
    <BmiText bmi={Bmi}/></>);
}