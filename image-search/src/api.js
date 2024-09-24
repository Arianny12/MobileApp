import axios from 'axios' 

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            // ACCESS KEY
            Authorization: 'Client-ID 5061ReeAqkXcQlVNZcGghKjQF8pzUk6OpyeAsXQr-Dw'
        },
        params: { query: term},
      })
      console.log (response.data.results)
      return response.data.results
}


export default searchImages