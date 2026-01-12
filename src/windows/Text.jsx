import WindowControls from '../components/WindowControls'
import WindowWrapper from '../HOC/WindowWrapper'
import useWindowStore from '../store/window'

const Text = () => {
  const { windows } = useWindowStore()
  const data = windows.txtfile.data

  if (!data) return null

  const { name, image, subtitle, description } = data

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className='bg-white overflow-y-auto h-full p-6'>
        {image && (
          <img 
            src={image} 
            alt={name} 
            className='w-full max-w-sm rounded-lg mb-4 object-cover'
          />
        )}
        
        {subtitle && (
          <h3 className='text-lg font-semibold mb-4 text-gray-800'>{subtitle}</h3>
        )}

        <div className='space-y-4'>
          {description && description.map((paragraph, index) => (
            <p key={index} className='text-gray-800 leading-relaxed text-base'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

const TextWindow = WindowWrapper(Text, 'txtfile')
export default TextWindow
