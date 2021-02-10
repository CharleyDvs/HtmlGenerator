import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  return (
    <section className="home">
      <h1>Generador de Html</h1>
      <p>Elije el html que quieres generar</p>
      <nav>
        <ul>
          <li onClick={() => router.push('/cornershop')}>Cornershop</li>
          <li onClick={() => router.push('products/compresor')}>Compresor</li>
        </ul>
      </nav>
    </section>
  )
}
