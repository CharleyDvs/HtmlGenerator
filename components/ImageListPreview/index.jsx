import React from 'react'

function ImageListPreview({ srcList }) {
  return (
    <>
      {srcList.map((src, index) => {
        if (src) {
          return (
            <img
              key={`image-preview-${index}`}
              src={src}
              width="655px"
              height="auto"
              alt="imagePreview"
            />
          )
        }
      })}
    </>
  )
}

export default ImageListPreview
