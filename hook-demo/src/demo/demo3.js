import React , {useState,useEffect,createContext,useContext} from 'react';
//使用hooks实现
//注意react 版本必须要大于16.8
//代替setState


const CountContext=createContext()
function Counter(){
    
    let countchild=useContext(CountContext)
    return(
    <h2>{countchild}</h2>
    )
}



// 要用函数
function  Example(){
    //第一个参数是变量，第二个参数是方法，useState(0)括号内参数是默认值
    const [count,setCount]=useState(0);
    //useEffect 
    useEffect(()=>{
        console.log(`useEffect=>  you click  ${count} times`)
        //主要用于路由跳转
        // return()=>{
        //     console.log('返回其他页面')
        // }
    },[])
    //[]设为空只有这个组件解绑时候才会才会执行return,[]参数为监听变化的值
    //值改变才执行return 
    return(
        <div>
            <p>you click {count}</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
            <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}

export default Example
