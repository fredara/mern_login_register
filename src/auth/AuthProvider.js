import React from 'react'
import { useState, createContext } from "react";

const AuthContext = createContext();

export default function AuthProvider({children}){

    const [user, setUser] = useState(null);

    const logIn = (inputsLogin) => setUser({id:1, typeProfile:'corredor'});
    const logout = () => setUser(null);


    const contextValue = {
        user,
        logIn,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}