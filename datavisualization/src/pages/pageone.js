import React ,{Component} from  'react'

class PageOne extends Component{
    componentDidMount(){
        // this.axios
        // .get("/api/daynews?type=top&key=491962a2187edfeb8d8ed841e83d77f5")
        // .then((response) => {
        //     console.log(response.data);
        // })
        // .catch(function(error) {
        //   console.log(error);
        // });
        fetch('/api/daynews?type=top&key=491962a2187edfeb8d8ed841e83d77f5',{
            method:'get'
        }).then(res=>{
            return res.json()
        }).then(res=>{
            console.log(res.result)
        })
        .catch(err=>{
            console.log(err)
            return err
        })
    }
    render(){
        return(
            <div>
                <p>这是主页</p>
            </div>
        )
    }
}
export default PageOne


