import { Navigate } from "react-router"

function Redirect() {
  const isLogged = false;
  
  if(isLogged)
    return <Navigate to='/app' replace />
  else
    return <Navigate to='/login' replace />
}

export default Redirect;