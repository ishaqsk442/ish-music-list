import {MdDelete} from 'react-icons/md'

import './index.css'

const SongsComponent = props => {
  const {eachSong, removeSong} = props
  const {imageUrl, name, genre, duration, id} = eachSong

  const onDeleteSong = () => {
    removeSong(id)
  }

  return (
    <li className="each-song">
      <>
        <img alt="track" src={imageUrl} className="img" />
        <div className="name-genre">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </>
      <div className="time-delete">
        <p className="name">{duration}</p>
        <button
          label="button"
          onClick={onDeleteSong}
          className="delete-button"
          type="button"
          data-testid="delete"
        >
          <MdDelete className="delete" />
        </button>
      </div>
    </li>
  )
}

export default SongsComponent
