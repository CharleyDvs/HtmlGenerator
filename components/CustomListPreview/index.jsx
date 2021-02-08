import React from 'react'

function CustomListPreview({ list, title }) {
  return (
    <>
      {title && <h3>{title}</h3>}
      <ul>
        {list.map((item, index) => {
          if (item) {
            return <li key={item + index}>{item}</li>
          }
        })}
      </ul>
    </>
  )
}

export default CustomListPreview
