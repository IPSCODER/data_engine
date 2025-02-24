import React, { createContext, useContext, useState } from 'react'

const ContextProvider = createContext()

const UserContext = ({children}) => {
  const [user,setUser] = useState(null)
  const [users,setUsers] = useState([])  

  return (
    <ContextProvider.Provider value={{user,users,setUser,setUsers}}>
      {children}
    </ContextProvider.Provider>
  )
}

export default UserContext


export const useUser = () => useContext(ContextProvider)