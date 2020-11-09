import React , {useCallback,useState,useEffect,useMemo} from 'react';

function Example7(){
    const [AA,setA]= useState('父组件的位置')
    const [BB,setB]=useState('bb的组件')
    return(
        <div>
            <button onClick={()=>{
                setA(new Date().getTime())
            }}>改变事件</button>
                     <button onClick={()=>{
                setB(new Date().getTime()+'记录事件')
            }}>记录事件</button>
        <ChildCom name={AA}>{BB}</ChildCom>
        </div>
    )

}
function  ChildCom({name,children}){
    function changeBB(){
        console.log('bb被修改了')
        return  name+'他向我们走来了'
    }
    //useMemo让自组建的状态没有重复执行
    //第一个为回调的函数，第二个为变量发生变化时调用
    const changeFnc= useMemo(()=>{ changeBB(name)},[name])  
        return(
            <div>
                <div></div>
                <div>{children}</div>
            </div>
        )
}

export default  Example7


