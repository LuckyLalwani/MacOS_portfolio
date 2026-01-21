import { Mail, Search } from "lucide-react"
import WindowControls from "../components/WindowControls"
import WindowWrapper from "../HOC/WindowWrapper"
import { gallery, photosLinks } from "../constants"
import useWindowStore from "../store/window"
import { useState } from "react"

const Photos = () => {
  const { openWindow } = useWindowStore()
  const [activeCategory, setActiveCategory] = useState(0)

  const handleImageClick = (id, img) => {
    openWindow("imgfile", {
      id,
      name: "Gallery image",
      icon: "/icons/image.png",
      kind: "file",
      fileType: "img",
      imageUrl: img,
    })
  }

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2 className="flex-1 text-center text-sm font-medium">Photos</h2>
        <div className="flex items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex h-full bg-white">
        <div className="sidebar">
          <h2>Collections</h2>

          <ul>
            {photosLinks.map(({ id, icon, title }) => (
              <li
                key={id}
                onClick={() => setActiveCategory(id - 1)}
                className={activeCategory === id - 1 ? "active" : ""}
              >
                <img src={icon} alt={title} />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery">
          <ul>
            {gallery.map(({ id, img }) => (
              <li
                key={id}
                onClick={() => handleImageClick(id, img)}
                className="cursor-pointer hover:opacity-80 transition-opacity"
              >
                <img src={img} alt={`Gallery image ${id}`} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

const PhotosWindow = WindowWrapper(Photos, 'photos')
export default PhotosWindow