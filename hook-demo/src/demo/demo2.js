import React , {useState} from 'react';
//多状态申明
//useState 不能存在条件判断中
function  Example2(){
    const [age,showage]=useState(18);
    const [sex,showsex]=useState('男');
    return(
        <div>
            <p>今年: {age}</p>;
            <p>性别: {sex}</p>
        </div>
    )


}


export default Example2