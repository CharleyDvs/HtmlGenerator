import React from 'react'
import { sortData } from '../../utils/sortData'
import { filterObjectKeys } from '../../utils/filterObjectKeys'
import ProductTitlePreview from '../ProductTitlePreview'
import CustomListPreview from '../CustomListPreview'
import LinkListPreview from '../LinkListPreview'
import ProductTablePreview from '../ProductTablePreview'
import ImageListPreview from '../ImageListPreview'
import VideoListPreview from '../VideoListPreview'

function ProductTemplatePreview({ data, initialTemplateData }) {
  const { tableTemplate } = initialTemplateData
  const tableDataSorted = sortData(Object.keys(tableTemplate), data)
  const alternativeCodeList = filterObjectKeys('alternative', data).map(
    (key) => {
      if (data[key]) return data[key]
    }
  )
  const innerCodeList = filterObjectKeys('inner', data).map((key) => {
    if (data[key]) return data[key]
  })
  const documentationTextList = filterObjectKeys('documentation', data).map(
    (key) => {
      if (data[key] && !data[key].includes('link')) {
        return data[key]
      }
    }
  )
  const documentationUrlList = filterObjectKeys('link-documentation', data).map(
    (key) => {
      if (data[key]) return data[key]
    }
  )
  const featuresList = filterObjectKeys('feature', data).map((key) => {
    if (data[key]) return data[key]
  })
  const accesoriesList = filterObjectKeys('accesory', data).map((key) => {
    if (data[key]) return data[key]
  })
  const imageList = filterObjectKeys('image', data).map((key) => {
    if (data[key]) return data[key]
  })
  const videoList = filterObjectKeys('video', data).map((key) => {
    if (data[key]) return data[key]
  })
  return (
    <section className="product-template-preview">
      <ProductTitlePreview data={data} productType="Compresor de aire" />
      <CustomListPreview list={alternativeCodeList} />
      <CustomListPreview list={innerCodeList} title="Códigos" />
      {data.niche && (
        <>
          <h3>Segmento Objetivo</h3>
          <p>{data.niche}</p>
        </>
      )}
      <LinkListPreview
        textList={documentationTextList}
        urlList={documentationUrlList}
        documentation
        title="Descargas"
      />
      {data.description && (
        <>
          <h3>Características</h3>
          <p>{data.description}</p>
        </>
      )}
      <CustomListPreview list={featuresList} />
      <ProductTablePreview
        tableData={tableDataSorted}
        tableTemplateData={tableTemplate}
      />
      <CustomListPreview list={accesoriesList} />
      <ImageListPreview srcList={imageList} />
      <VideoListPreview urlList={videoList} />
      {data.warranty && (
        <>
          <h3>Garantía</h3>
          <p>{data.warranty}</p>
        </>
      )}
    </section>
  )
}

export default ProductTemplatePreview
