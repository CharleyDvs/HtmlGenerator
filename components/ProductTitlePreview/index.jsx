import React from 'react'

function ProductTitlePreview({ data, productType }) {
  const {
    model,
    brandName,
    capacity,
    maxPressure,
    flowRate,
    tank,
    dryer,
  } = data
  return (
    <h1>{`${model} - ${brandName} - ${productType} - ${capacity} - ${maxPressure} - ${flowRate} - ${tank} - ${dryer}`}</h1>
  )
}

export default ProductTitlePreview
