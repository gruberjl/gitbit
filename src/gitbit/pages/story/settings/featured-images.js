/* eslint react/no-array-index-key:0 */
const React = require('react')

const FeaturedImages = ({images, onFeaturedImageClick, selectedImage}) => (
  <div>
    <h4>What Image do you want featured on social media and search engines?</h4>
    <div>
      { images.map((base64, idx) => (
        <button key={idx} className={`featured-image${base64 === selectedImage ? ' selected' : ''}`} onClick={() => onFeaturedImageClick(base64)} type="button">
          <img src={base64} alt="Featured" />
        </button>
      )) }
    </div>
  </div>
)

module.exports = {FeaturedImages}
