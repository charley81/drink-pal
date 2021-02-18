import React from 'react'
import { DrinkList } from '../components/drink-list'
import { SearchForm } from '../components/search-form'

export const Home = () => {
  return (
    <main>
      <SearchForm />
      <DrinkList />
    </main>
  )
}
