import Head from 'next/head'
import HtmlGenerator from '../components/HtmlGenerator'

export default function Home() {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/57fa0c75ff.js"
          crossOrigin="anonymous"
        ></script>
        <title>Generador de HTML</title>
      </Head>
      <HtmlGenerator />
    </>
  )
}
