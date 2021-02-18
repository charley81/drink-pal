import { useState, useContext, useEffect, createContext } from 'react'
import { useCallBack } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [drinks, setDrinks] = useState([])

  return (
    <AppContext.Provider value={{ loading, searchTerm, drinks, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook to access state
export const useGlobalContext = () => useContext(AppContext)
