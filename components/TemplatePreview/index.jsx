import React from 'react'

const TemplatePreview = ({ templateVariables }) => {
  const {
    brandName,
    logoUrl,
    leftImage,
    rightImage,
    flavorText,
    url1,
    url2,
    url3,
    linkImage1,
    linkImage2,
    linkImage3,
    linkText1,
    linkText2,
    linkText3,
    headerBg,
  } = templateVariables
  return (
    <section className="collection">
      <div className="grid-container">
        <div
          className="logo-container"
          style={{ backgroundColor: `#${headerBg}` }}
        >
          <img src={`${logoUrl}`} alt={`logo ${brandName}`} />
        </div>
        <div
          className="img-left "
          style={{ backgroundImage: `url('${leftImage}')` }}
        ></div>
        <div className="text-container">
          <h1 role="text">{brandName}</h1>
          <p>{flavorText}</p>
        </div>
        <div className="links-container">
          <div className="link-container">
            <a href={`${url1}`}>
              <img src={`${linkImage1}`} alt="" />
              <p>{linkText1}</p>
            </a>
          </div>
          <div className="link-container">
            <a href={`${url2}`}>
              <img src={`${linkImage2}`} alt="" />
              <p>{linkText2}</p>
            </a>
          </div>
          <div className="link-container">
            <a href={`${url3}`}>
              <img src={`${linkImage3}`} alt="" />
              <p>{linkText3}</p>
            </a>
          </div>
        </div>
        <div
          className="img-right"
          style={{ backgroundImage: `url('${rightImage}')` }}
        ></div>
      </div>
    </section>
  )
}

export default TemplatePreview
