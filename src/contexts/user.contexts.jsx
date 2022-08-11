
// 사용자의 정보를 현 jsx 파일에 몰빵하여 관리하기 용이하게 한다 

import { signOut } from "firebase/auth";
import {createContext,useState, useEffect } from "react";

import { onAuthStateChangedListener,createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,

});

export const UserProvider = ({children}) => {
const [currentUser, setCurrentUser] =useState(null);
const value = {currentUser, setCurrentUser}



useEffect( () => {    //언마운트할때마다 unsubscribe 하는 펑션 
    const unsubscribe = onAuthStateChangedListener((user) => {
        console.log(user)

        if(user) {
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);

    });
    return unsubscribe;
}, []);

return (

<UserContext.Provider value={value}>{children}</UserContext.Provider>
)
};