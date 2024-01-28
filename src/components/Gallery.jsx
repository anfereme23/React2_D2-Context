import  PhotoContext from "../context/PhotoContext"
import { useContext } from "react"
import IconHeart from "./IconHeart"

const Gallery = () => {
  const {photos, savePhotos} = useContext(PhotoContext)

  const setFavorite = (id) => {
    const photoId = photos.findIndex((f) => f.id === id)
    photos[photoId].liked = !photos[photoId].liked
    savePhotos([...photos])
  }

  return (
  <div className="gallery grid-columns-5 p-3">
    {photos.map((photo, i) => (
      <div
      onClick={() => setFavorite(photo.id)}
      className="photo"
      style={{ backgroundImage: `url(${photo.src})` }}
      key={i}
      >
        <IconHeart filled={photo.liked} />
        <p>{photo.alt}</p>
      </div>
    ))}
  </div>
  )
}
export default Gallery;
