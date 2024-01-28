import { useContext } from "react"
import PhotoContext from "../context/PhotoContext"

const Favorites = () => {
  const {photos} = useContext(PhotoContext)
  const contPhotos =  photos.filter((photo) => photo.liked).length
  return (
    <div className="App">
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {contPhotos ===0
        ? (<p><span>No ha seleccionado ninguna foto</span></p>)
        : (
            photos
              .filter((photo) => photo.liked)
              .map((photo, i) => <img src={photo.src} alt={photo.alt} key={i} />)
        )}
      </div>
    </div>
  )
}
export default Favorites
