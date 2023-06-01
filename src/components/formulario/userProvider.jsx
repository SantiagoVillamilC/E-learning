import React, {useState, useContext} from "react";

const userContext = React.createContext();
const userToggleContext = React.createContext();

export function useUserContext(){
    return useContext(userContext);
}

export function useUserToggleContext(){
    return useContext(userToggleContext);
}

export function UserProvider(props){

    const [user, setUser] = useState(null);

    function Ingresa(){
        if(user){
          setUser(null);
        }else{
          setUser({
            name: 'cami',
            email: 'cami@gmail.com',
            password: 12345,
          });
        }
      }

    return(
        <userContext.Provider value={user}>
            <userToggleContext.Provider value={Ingresa}>
                {props.children}
            </userToggleContext.Provider>
        </userContext.Provider>
    );
}