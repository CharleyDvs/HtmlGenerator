import React from 'react'

function LinkListPreview({ textList, urlList, documentation, title }) {
  return (
    <>
      {title && textList[0] && <h3>{title}</h3>}
      <ul>
        {textList.map((text, index) => {
          if (text && urlList[index]) {
            return (
              <li key={`${text}-${index}`}>
                {documentation && (
                  <img
                    src="https://cdn.shopify.com/s/files/1/0993/8216/files/FE0D94D656546624D01CF52984996156_icon.png?13899233917553613290"
                    alt="pdf icon"
                  />
                )}
                {'  '}
                <a href={urlList}>{text}</a>
              </li>
            )
          }
        })}
      </ul>
    </>
  )
}

export default LinkListPreview
