import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { FormEvent, useCallback, useState } from 'react'
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

    const products = responseJson.map(product => {
      return {
        id: product.id
      }
    })

    setResults(responseJson)
  }

  // function addItemInCart(id: number ) {
  //   console.log(id)
  // }

  const addItemInCart = useCallback((id: number ) => {
      console.log(id)
    }, [])

  /**
   * O useCallBack vai evitar que uma função seja criada do total zero
   * Deve ser usada com a função é passada como propriedade para vários components
   */

  return (
    <div className={styles.container}>
      <div className={styles.main}>

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

        <SearchProducts results={results} addItemInCart={addItemInCart} />
      </div>
    </div>
  )
}

export default Home
