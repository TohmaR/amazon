import { AdressesContext } from '../context/AdressesContext'
import { useContext } from 'react'

export const useAdressesContext = () => {
  const context = useContext(AdressesContext)

  if (!context) {
    throw Error('useAdressesContext must be used inside an AdressesContextProvider')
  }

  return context
}