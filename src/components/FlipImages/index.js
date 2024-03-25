import './index.css'

const FlipImages = props => {
  const {list} = props
  const {image, name, isClick, onClickFlipImage} = list
  const foot =
    'https://res.cloudinary.com/dlsuy2qn2/image/upload/v1711276211/360_F_335131435_DrHIQjlOKlu3GCXtpFkIG1v0cGgM9vJC_qve3uj.jpg'
  const isClicked = isClick ? {image} : foot

  const onClickImage = () => {
    onClickFlipImage(name)
  }

  return (
    <li className="list">
      <button
        className="flip-image-button"
        type="button"
        onClick={onClickImage}
      >
        <img src={isClicked} alt={name} className="flip-image" />
      </button>
    </li>
  )
}
export default FlipImages
