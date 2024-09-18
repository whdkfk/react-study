import { useState } from "react";

export default function Hello(){
    // let name = "Ara";
    const [name, setName] = useState('Ara');

    return (
        <div>
            <h2 id="name">{name}</h2>
            <button onClick={()=>{
                setName(name === "Ara" ? "Jane" : "Ara")
            }}
        >
            Change
        </button>
        </div>
    );
}