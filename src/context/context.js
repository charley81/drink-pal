import { useState, useContext, useEffect, createContext } from 'react'
import { useCallBack } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppContext = createContext()

export const AppProvider = ({ children }) => (
  <AppContext.Provider value="hello">{children}</AppContext.Provider>
)

// custom hook to access state
export const useGlobalContext = () => useContext(AppContext)
