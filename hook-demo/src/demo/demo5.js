//useref 获取dom元素，储存值
import React , {useRef,useState,useEffect} from 'react';

function Example5(){
    const inputEL=useRef(null)
    const showText=()=>{
        inputEL.current.value=text
        console.log(inputEL)
    }
    const [text,setText]=useState('hahaa')
    //useRdf 也获取元素上的方法
    const textRef=useRef()
    useEffect(()=>{
        textRef.current=text;
        console.log(textRef.current,'textRef.current')
    })
    return(
        <div>
            <input ref={inputEL} type='text'></input>
            <button onClick={showText}>显示input文字</button>
            <br/>
            <br/>
            <input value={text}  onChange={(e)=>{
                setText(e.target.value)
            }}></input>
        </div>
    )
}

export default Example5



