import React from 'react'
import { useGlobalContext } from '../context/context'

export const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()

  return <form>search form component</form>
}
