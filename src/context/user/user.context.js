import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import React, {createContext, useContext, useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { api, config } from "../../redux/helpers/api";
import { fetchUser, getToken } from "../../redux/slices/user.slice";

const initialUser = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  password_confirmation: ''
}

const UserContext = createContext({
  user: initialUser
})

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(initialUser);

  useEffect(() => { 
    const fetchUserData = async() => {
        let data = await getToken()
        const response = await api.get(`/users/${data}`, config);
        console.log('userid', data);
        console.log('user', response.data);
        setUser(response.data);
        return response.data;
    }
    console.log('this user', user)
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  )
};

export const useUserContext = () => useContext(UserContext);