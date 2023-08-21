// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, clickImageItem} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const onClickImageItem = () => {
    clickImageItem(id)
  }

  return (
    <>
      <li className="list-item">
        <button type="button" onClick={onClickImageItem}>
          <img src={thumbnailUrl} className="image" alt={thumbnailAltText} />
        </button>
      </li>
    </>
  )
}

export default ThumbnailItem
