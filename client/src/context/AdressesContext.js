import { createContext, useReducer } from 'react'

export const AdressesContext = createContext()

export const adressesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ADRESSES': 
      return {
        adresses: action.payload
      }
    case 'CREATE_ADRESSE':
      return {
        adresses: [action.payload, ...state.adresses]
      }
    case 'DELETE_ADRESSE':
      return {
        adresses: state.adresses.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const AdressesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(adressesReducer, {
    adresses: null
  })

  return (
    <AdressesContext.Provider value={{...state, dispatch}}>
      { children }
    </AdressesContext.Provider>
  )
}