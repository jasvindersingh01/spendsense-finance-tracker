import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"))
        if (storedUser) {
            setUser(storedUser);
        }
        setLoading(false)
    }, [])

    const handleSignUp = (username, password, email) => {
        if (email.endsWith("@gmail.com") && password.length >= 7) {

            const existingUser = JSON.parse(localStorage.getItem("users")) || [];

            const userExists = existingUser.find(user => user.email === email);
            if (userExists) {
                alert("User already exist!");
                return;
            }

            const newUser = { username, email, password };
            const updateUsers = [...existingUser, newUser];

            localStorage.setItem("users", JSON.stringify(updateUsers));
            localStorage.setItem("user", JSON.stringify(newUser));
            setUser(newUser);
        }
    }

    const handleLogin = (email, password) => {

        const allUsers = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = allUsers.find(
            user => user.email === email && user.password === password
        );

        const storedUser = JSON.parse(localStorage.getItem("user"));

        if (matchedUser) {
            localStorage.setItem("user", JSON.stringify(matchedUser));
            setUser(matchedUser);
            navigate("/dashboard");
            return true;
        } else {
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("user")
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, loading, handleSignUp, handleLogin, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}