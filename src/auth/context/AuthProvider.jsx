import { AuthContext } from './AuthContext';
import { authReducer } from './AuthReducer';
const initialState = {
    logged: false,
};

export const AuthProvider = ({ children }) => {
    const reducer = useReducer(authReducer, initialState);
    return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
