// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {data, isActive, onClickThumbnail} = props
  const {id, thumbnailUrl, thumbnailAltText} = data

  const onClickBtn = () => {
    onClickThumbnail(id)
  }

  const imageClass = isActive ? 'normal' : 'blur'
  return (
    <li>
      <button type="button" onClick={onClickBtn}>
        <img src={thumbnailUrl} alt={thumbnailAltText} className={imageClass} />
      </button>
    </li>
  )
}
export default ThumbnailItem
