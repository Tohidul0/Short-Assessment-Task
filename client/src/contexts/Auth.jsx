import React, { createContext, useState, useContext, useEffect } from 'react';

import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  useEffect(() => {
    // Check if the user is already logged in
    const token = Cookies.get('access_token');
    if (token) {
      // Perform verification of the token and fetch user data if necessary
      // For example, you might send the token to your server to verify its authenticity
      // Once verified, you would set the user state accordingly
      // This is just a mock implementation
      const userFromToken = verifyTokenAndGetUserData(token);
      setUser(userFromToken);
    }
  }, []);


  const login = (userData) => {
    // Perform your login logic here
    setUser(userData);
  };

  const logout = () => {
    
    // Perform your logout logic here
    Cookies.remove('access_token');
    setUser(null);
    
    console.log(user)
    
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
