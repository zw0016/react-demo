import React , {useState,useReducer} from 'react';
//useReducer useContext 混合使用
function ReducerDemo(){
    const [count,dispatch]=useReducer((state,action)=>{
        switch(action){
            case 'add':
            return state +1
            case 'sub':
            return state-1
            default:
            return state
        }
    },0)

    return (
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={()=>{dispatch('add')}}>加一</button>
            <button onClick={()=>{dispatch('sub')}}>减一</button>
        </div>
    )
}


export default ReducerDemo
