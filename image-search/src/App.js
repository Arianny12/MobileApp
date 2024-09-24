import {useState} from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from './api'

const App = () => {
    //the reason why we want our images here and not in searchbar or another child component
    //is bc this is where we want to trigger rerender
    const [images, setImages] = useState([])
    
    const handleSubmit = async (term) => {
        console.log('do a search with: ', term)
        const result = await searchImages(term)
        console.log(result)
        setImages(result)
    }
    return (
        <div>
            <SearchBar onSubmit={handleSubmit}/>
            <ImageList images ={images}/>
        </div>
    )
}

export default App