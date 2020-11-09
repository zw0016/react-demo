const getNews = (usePsd ={}, action) => {
    switch(action.type) {
      case 'LOAD_News':
        return {
            usePsd: action.payload,
          
        }
      default:
        return usePsd
    }
  }
  
  export default getNews;