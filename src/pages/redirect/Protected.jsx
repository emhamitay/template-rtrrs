import { Navigate } from "react-router"

function Protected({ children }) {
  const isLogged = false;
  
  if(!isLogged)
    return <Navigate to='/login' replace />
  else
    return { children }
}

export default Protected;