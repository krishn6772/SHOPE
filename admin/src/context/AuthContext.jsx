import { createContext } from 'react'

export const authDataContext = createContext();
function AuthContext({children}) {
    let serverUrl = "https://shope-backend-5mrl.onrender.com";

    let value = {
        serverUrl,
    }
  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  )
}

export default AuthContext
