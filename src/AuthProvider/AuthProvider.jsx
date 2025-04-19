import { createContext } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ router }) => {
    const name = 'rafusn';
    const createUser = (email, password) => {
        return createUse
    }
    const authInfo = {
        name
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {router}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider;