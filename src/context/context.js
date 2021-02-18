import { useState, useContext, useEffect, createContext } from 'react'
import { useCallBack } from 'react'
import { Loading } from '../components/loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [drinks, setDrinks] = useState([])

  const fetchDrinks = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { drinks } = data

      if (drinks) {
        const newDrinks = drinks.map(drink => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = drink

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setDrinks(newDrinks)
      } else {
        setDrinks([])
      }
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    return fetchDrinks()
  }, [searchTerm])

  return (
    <AppContext.Provider value={{ loading, drinks, setSearchTerm }}>
      {children}
    </AppContext.Provider>
  )
}

// custom hook to access state
export const useGlobalContext = () => useContext(AppContext)
