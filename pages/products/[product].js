import React from 'react'
import CompressorHtml from '../../components/CompressorHtml'
import { useRouter } from 'next/router'

function ProductHtml() {
  const router = useRouter()
  const { product } = router.query
  return (
    <main className="product-html-generator">
      <h1>Generador de código para {product}</h1>
      {product === 'compresor' && <CompressorHtml />}
    </main>
  )
}

export default ProductHtml

export async function getStaticPaths() {
  return {
    paths: [{ params: { product: 'compresor' } }],
    fallback: false,
  }
}

export async function getStaticProps() {
  return {
    props: {},
  }
}
