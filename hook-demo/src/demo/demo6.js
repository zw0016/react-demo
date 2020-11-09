import React , {useCallback,useState,useEffect} from 'react';
//自定义函数 
//监听窗口大小
function useWinSize(){
    const [size,setSize]=useState({
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
    })
    //usecallback 缓存方法优化性能
    const onResize=useCallback(()=>{
        setSize({
            width:document.documentElement.clientWidth,
            height:document.documentElement.clientHeight
        })
    })
    //第二个参数为监听变量改变时调用自身函数，return为跳出或者销毁函数时执行方法
    useEffect(()=>{
        window.addEventListener('resize',onResize)
        return ()=>{
        window.removeEventListener('resize',onResize)
        }
    },[])
    return size
}

function Example6(){
    const size=useWinSize()
    return(
        <div>
            <p>宽度是{size.width}</p>
            <p>高度是{size.height}</p>
        </div>
    )
}

export default Example6



