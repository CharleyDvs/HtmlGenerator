export const templateGenerator = (obj) => {
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
  } = obj
  const template = `
  <header class="collection">
  <div class="grid-container">
    <div class="logo-container" style="background-color: #${headerBg};">
      <img src="${logoUrl}" alt="logo ${brandName}">
    </div>
    <div class="img-left " style="background-image: url('${leftImage}');" ></div>
    <div class="text-container">
      <h1 role="text">${brandName}</h1>
      <p>${flavorText}</p>
    </div>
    <div class="links-container">
      <div class="link-container">
        <a href="${url1}">
          <img src="${linkImage1}" alt="${linkText1}">
          <p>${linkText1}</p>
        </a>
      </div>
      <div class="link-container">
        <a href="${url2}">
          <img src="${linkImage2}" alt="${linkText2}">
          <p>${linkText2}</p>
        </a>
      </div>
      <div class="link-container">
        <a href="${url3}">
          <img src="${linkImage3}" alt="${linkText3}">
          <p>${linkText3}</p>
        </a>
      </div>
    </div>
    <div class="img-right" style="background-image: url('${rightImage}');" ></div>
  </div>
</header>
`

  return template
}
