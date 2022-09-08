import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useState } from 'react'
import { SearchProducts } from '../components/SearchProducts'
import styles from '../styles/Home.module.css'

interface Product {
    id: number;
    price: number;
    title: string;
}

const Home: NextPage = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState<Product[]>([])

  async function handleSearchProducts(e: FormEvent) {
    e.preventDefault()

    if (!search.trim()) {
      return
    }

    const response = await fetch(`http://localhost:3333/products?q=${search}`)
    const responseJson = await response.json()

    setResults(responseJson)
  }

  return (
    <div>

      <h1>Pesquisa</h1>
      <form onSubmit={handleSearchProducts}>
        <input 
          type="text" 
          placeholder='Digite a busca'
          onChange={({target}) => setSearch(target.value)}
          value={search}
        />
        <button type="submit">Buscar</button>
      </form>

      <SearchProducts results={results} />
    </div>
  )
}

export default Home
