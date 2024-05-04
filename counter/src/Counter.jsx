import { useEffect, useState } from "react";
import "./style.css";

const Counter = () => {
    const [MyNum, setMyNum] = useState(0);

    useEffect(() => {
        document.title = `Counter ${MyNum}`;
    }, [MyNum]);

    return (
        <>
            <div className="center_div">
                <p>{MyNum}</p>
                <div className="button2" onClick={() => setMyNum(MyNum+1)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div className="button2" onClick={() => { (MyNum > 0) ? setMyNum(MyNum-1) : setMyNum(0)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div>
        </>
    );
};

export default Counter;