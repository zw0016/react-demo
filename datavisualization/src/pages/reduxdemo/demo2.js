import React ,{Component} from  'react'
import {connect} from 'react-redux'
import {getDateNews} from '../../actions/getDataNews'
class  ComB extends Component{
    constructor(props) {
        super(props);
        this.state={
            uesInformation:this.getNews
        }
      }
    componentDidMount(){
            this.props.dispatch(getDateNews)    
    }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.uesInformation !== this.state.uesInformation) {
    //       return true
    //     }
    //     return false
    //   }
    render(){
     const   getNews=this.props.getNews
        return(
            <div>
               {this.props.counter.count}
            </div>
        )
    }
}
 const mapStateProps =(state)=>{
    //  console.log('reducer',state)
     return state
 }
//接收方 
export default connect(mapStateProps,)(ComB)