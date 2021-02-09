import { filterObjectKeys } from './filterObjectKeys'
import { sortData } from './sortData'

export const compressorHtmlGenerator = (data, dataTemplate) => {
  const compressorTitleHtml = `
  <p><strong>${data.model} - ${data.brandName} - Compresor de aire - ${data.capacity} - ${data.maxPressure} Máx. - ${data.flowRate} - ${data.tank} - ${data.dryer}.<br data-mce-fragment="1"></strong><br></p>`

  const alternativeCodes = filterObjectKeys('alternative', data).map((key) => {
    if (data[key]) return data[key]
  })
  const alternativeCodesHtml = alternativeCodes
    .map((code) => {
      if (code) {
        return `<p>${code}</p>`
      }
    })
    .join('')

  const innerCodes = filterObjectKeys('inner', data).map((key) => {
    if (data[key]) return data[key]
  })
  const innerCodesHtml =
    `<span style="color: #131479;"><strong><span style="color: #000000;">CÓDIGOS:<br></span></strong></span>` +
    innerCodes
      .map((code) => {
        if (code) {
          return `<p>${code}</p>`
        }
      })
      .join('')

  const brandNameHtml = data.brandName
    ? `
  <p>&nbsp;</p>
  <h4><span style="color: #000000;"><strong>FABRICANTE:</strong></span></h4>
  <p><span style="color: #000000;">${data.brandName}</span></p>
  <p>&nbsp;</p>
  <br>
  `
    : ''

  const documentationTextList = filterObjectKeys(
    'text-documentation',
    data
  ).map((key) => {
    if (data[key] && !key.includes('link')) {
      return data[key]
    }
  })
  const documentationUrlList = filterObjectKeys('link-documentation', data).map(
    (key) => {
      if (data[key]) {
        return data[key]
      }
    }
  )
  const documentationHTML =
    documentationTextList.length > 0 && documentationUrlList.length > 0
      ? `<p><span style="color: #000000;" data-mce-style="color: #000000;"><strong>DESCARGAS:</strong></span><span class="c-filetype u-1-of-5-bp2 u-tar"><br></span></p>` +
        documentationTextList
          .map((text, index) => {
            if (documentationUrlList[index]) {
              return `
      <h4><a href="${documentationUrlList[index]}" target="_blank"><img src="https://cdn.shopify.com/s/files/1/0993/8216/files/FE0D94D656546624D01CF52984996156_icon.png?13899233917553613290" alt="pdf logo">&nbsp;${text}</a></h4>
      `
            }
          })
          .join('') +
        `
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p>&nbsp;</p>`
      : ''

  const nicheHtml = data.niche
    ? `
    <p><span style="display: inline !important; float: none; background-color: #ffffff; color: #212b36; font-family: -apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: bold; letter-spacing: normal; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px;">SEGMENTO OBJETIVO:</span></p>
    <p>${data.niche}</p>
    <p>&nbsp;</p>
    `
    : ''

  const descriptionHtml = data.description
    ? `
    <p><strong>CARACTERÍSTICAS:</strong></p>
    <p><span style="color: #000000;" data-mce-style="color: #000000;">${data.description}<strong><br><br></strong></span></p>
    
    `
    : ''

  const featuresList = filterObjectKeys('feature', data).map((key) => {
    if (data[key]) {
      return data[key]
    }
  })
  const featureListHtml =
    featuresList.length > 0
      ? `
    <ul>
    ` +
        featuresList
          .map((feature) => {
            if (feature) return `<li>${feature}</li>`
          })
          .join('') +
        `
    </ul>
    <p>&nbsp;</p>
    `
      : ''

  const { tableTemplate } = dataTemplate
  const tableDataSorted = sortData(Object.keys(tableTemplate), data)
  const tableKeys = Object.keys(tableDataSorted)
  const tableHtml =
    `
    <p><strong>ESPECIFICACIONES:</strong></p>
    <table class="product-table">
    <tbody>` +
    tableKeys
      .map((tableKey) => {
        if (data[tableKey] !== '') {
          return `
          <tr>
            <th>${tableTemplate[tableKey].label}</th>
            <td>${data[tableKey]}</td>
          </tr>
          `
        }
      })
      .join('') +
    `</tbody>
    </table>
    <p>&nbsp;</p>
  `

  const accesoriesList = filterObjectKeys('accesory', data).map((key) => {
    if (data[key]) return data[key]
  })
  const accesoriesListHtml =
    accesoriesList.length > 0
      ? `
      <p><strong>EQUIPAMIENTO INCLUIDO:</strong></p>
      <ul>
      ` +
        accesoriesList
          .map((accesory) => {
            if (accesory) {
              return `
          <li><span data-mce-fragment="1">${accesory}</span></li>
          `
            }
          })
          .join('') +
        `
      </ul>  
    `
      : ''

  const imagesUrlList = filterObjectKeys('image', data).map((key) => {
    if (data[key]) {
      return data[key]
    }
  })
  const imagesHtml =
    imagesUrlList.length > 0
      ? `
      <p><br><strong>MULTIMEDIA:</strong><br></p>
      ` +
        imagesUrlList
          .map((url) => {
            if (url) {
              return `
          <p><img src="${url}" alt="imagen de compresor ${data.brandName}"></p>
          `
            }
          })
          .join('') +
        `
    `
      : ''

  const videoUrlList = filterObjectKeys('video', data).map((key) => {
    if (data[key]) {
      return data[key]
    }
  })
  const videoListHtml =
    videoUrlList.length > 0
      ? videoUrlList
          .map((url) => {
            if (url) {
              return `
        <p style="color: #212b36; font-family: -apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; letter-spacing: normal; line-height: 1.4; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px; margin: 0px 0px 1em 0px;"><strong><iframe src="${url}" height="315" width="560" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" frameborder="0"></iframe></strong></p>
        `
            }
          })
          .join('')
      : ''

  const warrantyHtml = data.warranty
    ? `
  <p>&nbsp;</p>
  <p>&nbsp;</p>
  <p style="color: #212b36; font-family: -apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; letter-spacing: normal; line-height: 1.4; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px; margin: 0px 0px 1em 0px;"><strong>GARANTÍA:</strong></p>
  <p style="color: #212b36; font-family: -apple-system,BlinkMacSystemFont,San Francisco,Segoe UI,Roboto,Helvetica Neue,sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: 400; letter-spacing: normal; line-height: 1.4; orphans: 2; text-align: left; text-decoration: none; text-indent: 0px; text-transform: none; -webkit-text-stroke-width: 0px; white-space: normal; word-spacing: 0px; margin: 0px 0px 1em 0px;"><span>${data.warranty}</span></p>
  `
    : ''

  return (
    compressorTitleHtml +
    alternativeCodesHtml +
    innerCodesHtml +
    brandNameHtml +
    documentationHTML +
    nicheHtml +
    descriptionHtml +
    featureListHtml +
    tableHtml +
    accesoriesListHtml +
    imagesHtml +
    videoListHtml +
    warrantyHtml
  )
}
