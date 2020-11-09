import React ,{Component} from  'react'

import { connect } from 'react-redux';
class AddA extends Component{
    constructor(props){
        super(props)
        this.state={
    myMsg:{
        name:'zw',
        age:'18'
    }
   }
    }
  
    handleClick=()=>{
        const myMsg=this.state.myMsg
        this.props.sendAction(myMsg)
    }
    render(){

        return(
            <div>
                <button onClick={this.handleClick}>+</button>
            </div>
        )
    }
}
   const mapDispatchToprops=(dispatch)=>{
       return{
           sendAction:(myMsg)=>{
               //传递action 对象 定义一个type属性
               dispatch({
                   type:'add_action',
                   myMsg:myMsg
                   //可以用来传参数
               })
           }
       }

   }
   const  mapStateProps=(state)=>{
    //    console.log(state)
       return state

   }
//发送方 所以调用mapDispatch  
 // 也可以是接收方
export default  connect(mapStateProps,mapDispatchToprops)(AddA)
