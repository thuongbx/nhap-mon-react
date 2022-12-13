import { useState } from "react";

const TangSo = () => {
    const [counter, setCounter] = useState(1)
    const hamTangSo = () => {
        setCounter(counter + 1);
    }
    return (
        <div className="App" style={{padding: 20}}>
            <h1>{counter}</h1>
            <button onClick={hamTangSo}>Click</button>
        </div>
    )
}

export default TangSo;