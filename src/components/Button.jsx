import { useState } from 'react';
import './Button.css'

export default function Button() {

    var [color, setColor] = useState('red')

    
    const change = () => {
        let text = document.getElementById("b").textContent;
        if(text == "Primary")
            setColor("blue")
        else if(text == "Secondary")
            setColor("green")
    }

    return(
        <>
            <div>
                <button onClick={change} id="b" className={color}>Secondary</button>
            </div>
        </>
    )
}