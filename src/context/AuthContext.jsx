import { createContext, useState } from "react";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
    const [isAuthorized, setIsAuthorized] = useState(false);
const login = (name,password) => {
        if (name && password) {
            setIsAuthorized(true)
        }
    }
    const logout = () => {
        setIsAuthorized(false)
    }
    return <AuthContext.Provider value={{ isAuthorized, login, logout }}>{children}</AuthContext.Provider>
}