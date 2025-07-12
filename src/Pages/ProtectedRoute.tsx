import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import { useAccount } from "../Contexts/AccountContext";

interface ProtectedRouteProps {
    children?: ReactNode
}

export default function ProtectedRoute({ children } : ProtectedRouteProps){
     const { isAuthenticated } = useAccount();
     
    return isAuthenticated() ? children : <Navigate to="/login"></Navigate>
}
