import WindowControls from '../components/WindowControls'
import WindowWrapper from '../HOC/WindowWrapper'
import useWindowStore from '../store/window'

const Image = () => {
  const { windows } = useWindowStore()
  const data = windows.imgfile.data

  if (!data) return null

  const { name, imageUrl } = data

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className='bg-white overflow-y-auto h-full p-6 flex items-center justify-center'>
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt={name} 
            className='max-w-full max-h-full rounded-lg object-contain'
          />
        )}
      </div>
    </>
  )
}

const ImageWindow = WindowWrapper(Image, 'imgfile')
export default ImageWindow
