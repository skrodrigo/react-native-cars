import React, { createContext, useState } from 'react-native'

export const CarContext = createContext()

export function CarProvider({ children }) {
  const [cars, setCars] = useState([])

  return (
    <CarContext.Provider value={{ cars, setCars }}>
      {children}
    </CarContext.Provider>
  )
}