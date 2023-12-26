import './index.css'
import {FaSearch} from 'react-icons/fa'

const SearchComponent = props => {
  const {inputChange} = props
  const onChangeText = event => {
    inputChange(event.target.value)
  }
  return (
    <div className="search-cont">
      <h1 className="head">Songs Playlist</h1>
      <div className="input-cont">
        <input
          className="input"
          type="search"
          placeholder="Search"
          onChange={onChangeText}
        />
        <FaSearch className="icon" />
      </div>
    </div>
  )
}
export default SearchComponent
