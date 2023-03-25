import React from 'react'
import { useState, createContext } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [cardData, setCardData] = useState({ background: '' })

  return (
    <AppContext.Provider
      value={{
        cardData,
        setCardData
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider