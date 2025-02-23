
import { useState } from "react";
import './BaiTap2.css'

export default function BaiTap2() {

    var toDoList = [];
    var [x, setX] = useState('');

    const handleChangeInput = (e) => {
        setX(e.target.value)
    }

    const handleClick = () => {
        toDoList.push(x);
        toDoList.forEach(i => console.log(i));
    }

    return(
        <>
            <div>
                <span id="Title">To do app</span>
                <br />
                <input onChange = {handleChangeInput} type="text" />
                <button onClick = {handleClick}>Add</button>
            </div>
        </>
    )
}