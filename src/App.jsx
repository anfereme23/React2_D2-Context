import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Favorites from "./views/Favorites"
import Home from "./views/Home"
import PhotoContext from "./context/PhotoContext"

const PHOTO_URL = "/src/assets/photos.json"

const App = () => {
  const [photos, setPhotos] = useState([])
  const getPhotos = async () => {
    try {
      const response = await fetch(PHOTO_URL)
      if (!response.ok){
        throw new Error("Failed fetching photos")
      }
      const data = await response.json()
      const resultedPhotos = data.photos.map((photo) => ({
        id: photo.id,
        src: photo.src.tiny,
        alt: photo.alt,
        liked: false
      }))
      setPhotos(resultedPhotos)
    } catch (error) {
      console.error("Error fetching photos:", error)
    }
  }

  useEffect(() => {
    getPhotos()
  }, [])

  return (
    <PhotoContext.Provider value={{photos, savePhotos: setPhotos}}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/favoritos"
          element={<Favorites />}
        />
      </Routes>
    </PhotoContext.Provider>
  )
}
export default App
