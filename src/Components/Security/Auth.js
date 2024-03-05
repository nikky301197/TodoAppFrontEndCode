import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({children})
{
    const[number , setNumber] = useState(0);
    const[isAuthenticated , setAuthenticated] = useState();
    const [username, setUsername] = useState("");

    return(
        <AuthContext.Provider value={{number , isAuthenticated , setAuthenticated , username ,setUsername }}>
            {children}
        </AuthContext.Provider>
    )
}