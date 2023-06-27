import React, { useState } from 'react'
interface CountData{
    firstNumber:number;
}
export default function CountComp(props:CountData) {
    const [numberchange,setNumberchange]=useState(0);
    const InputChange=(e:React.ChangeEvent<HTMLInputElement>)=>{setNumberchange(parseInt(e.target.value))}
    console.log(numberchange)
    return (
    <div>
        <h3>Counter컴포넌트</h3>
        <p>props 값으로 전달된 처음 값 : {props.firstNumber}</p>
        <p>props 값을 받아와 값을 수정하는 state 값 : {numberchange}</p>
        <label >수정할 숫자</label>
        <input type="number"
        onChange={InputChange}/>
    </div>
  )
}
