const ImageSizeSelector = ({ sizes, selectedSize, onSelectSize }) => {
  return (
    <div className="image-size-selector">
      {sizes.map((size) => (
        <label key={size}>
          <input
            type="radio"
            value={size}
            checked={selectedSize === size}
            onChange={() => onSelectSize(size)}
          />
          <span></span>
          <div className="info">
            <p>{size}</p>
          </div>
        </label>
      ))}
    </div>
  )
}

export default ImageSizeSelector
