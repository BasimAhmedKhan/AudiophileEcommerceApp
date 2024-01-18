import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {

    const [token, setToken] = useState("");
    const [isLogin, setIsLogin] = useState(true);

    function login(email, password){
        axios.post("http://192.168.100.46:8081/auth/login", {})
    }

    function addToken() {

    }

    return (
        <AuthContext.Provider value={{
            addToken,
            token,
            isLogin,
            setIsLogin
        }}>
            {children}
        </AuthContext.Provider>
    );
}
