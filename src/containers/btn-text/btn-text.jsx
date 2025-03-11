import { useState } from "react";

export default function BtnText() {
    
    const [msg, setMsg] = useState('Initial');
    // msg    -> Valeur actuelle du state
    // setMsg -> Méthode pour modifer le state

    const handleAdd = () => {
        setMsg(prevMsg => prevMsg + ' Hello');
    };

    const handleReset = () => {
        setMsg('Reset')
    };

    return (
        <>
            <p>{msg}</p>
            <button onClick={handleAdd}>Ajouter</button>
            <button onClick={handleReset}>Recommencer</button>
        </>
    )
}