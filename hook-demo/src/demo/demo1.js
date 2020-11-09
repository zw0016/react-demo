import React , {useState,useEffect,useContext} from 'react';
//使用hooks实现
//注意react 版本必须要大于16.8
//代替setState
//useEffect 代替react的生命周期
//无阻塞更新
//副作用；
//useEffect(回调函数,[])
//[]副作用的变化
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
    },[count])
    //[]设为空只有这个组件解绑时候才会才会执行return,[]参数为监听变化的值
    //值改变才执行return 
    useEffect(()=>{
        //主要用于路由跳转
        return()=>{
            // console.log('返回其他页面')
            //组建卸载时执行的函数
        }
    },)
    return(
        <div>
            <p>you click {count}</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}

export default Example






