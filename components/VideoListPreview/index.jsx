import React from 'react'

function VideoListPreview({ urlList }) {
  return (
    <>
      {urlList.map((url) => {
        if (url) {
          return (
            <>
              <iframe
                width="560"
                height="315"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen=""
              ></iframe>
              <br></br>
            </>
          )
        }
      })}
    </>
  )
}

export default VideoListPreview
