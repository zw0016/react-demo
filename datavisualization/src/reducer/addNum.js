
const counterReducer =(state={ count:0,
    useMsg:{}
},action)=>{
    // console.log(action)
   // return {state}
   switch(action.type){
       case "add_action":
       return{
           count :state.count+1,
           useMsg:action.myMsg

           
       }
       default:
       return state
   }
}

export default counterReducer