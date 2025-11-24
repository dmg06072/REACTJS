import {useState, useEffect} from "react"

const MyComponent = ()=>{
    // state
    // let count = 0
    const [count, setCount] = useState(0)
    //handler
    const handleClick=()=>{
        // count++;
        setCount(count+1)   // 비동기 함수
        console.log(count+1);
    }
    // 최초 1회 실행(1회만 랜더링)
    useEffect(()=>{
        console.log("init setting")
    },[])
    // count state가 변경될때마다 실행
    useEffect(()=>{
        console.log("count state Change..", count);
    },[count])
    return(
        <>
            <h2>MyComponent...</h2>
            <button onClick={handleClick}>Btn Count : {count}</button>
        </>
    )
}

export default MyComponent