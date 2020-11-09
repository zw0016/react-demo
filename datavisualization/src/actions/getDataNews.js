import { get } from 'axios';
function getPosts() {
  return get('/api/daynews?type=top&key=491962a2187edfeb8d8ed841e83d77f5')
}
function getNews(){
    return fetch('/api/daynews?type=top&key=491962a2187edfeb8d8ed841e83d77f5',{
      method:'get'
  }).then(res=>{
      return res.json()
  })
}

export const getDateNews = async (dispatch) => {
    //   const res = await getPosts()
    //   // console.log(res.data.result.data)
    //    dispatch({
    //   type: 'LOAD_News',
    //   payload: res.data.result.data
    // })
    const res= await getNews()
    console.log(res)
        dispatch({
      type: 'LOAD_News',
      payload: res.result===null?null:res.result.data
    })
  }


  



