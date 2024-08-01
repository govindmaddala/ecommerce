import React, { createContext, useContext } from "react";

const UserContext = createContext({
    isLoggedIn: false
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UserProvider: React.FC<any> = ({ children }) => {
    const UserData = {
        isLoggedIn: true
    }
    return <UserContext.Provider value={UserData} >
        {children}
    </UserContext.Provider>
}

export const UserState = ()=>{
    return useContext(UserContext);
}


export default UserProvider;
