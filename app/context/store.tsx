"use client";
import React, { createContext, useState, useContext } from "react";

interface AuthContextType {
  username: string;
  isLoggedIn: boolean;
  isUsernameValid:boolean;
  showModal:boolean;
  showModal1:boolean;
  setShowModal:React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal1:React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: (loggedInUsername: string) => void;
  handleUsernameChange:(event:any)=>void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const Store: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal1, setShowModal1] = useState<boolean>(false);
  const handleLogin = (loggedInUsername: string) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
  };
  const handleUsernameChange = (event: any) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    setIsUsernameValid(newUsername.length >= 3);
  };
  
  const value: AuthContextType = {
    username,
    isLoggedIn,
    isUsernameValid,
    showModal,
    showModal1,
    setShowModal,
    setShowModal1,
    handleLogin,
    handleUsernameChange,
    setIsLoggedIn
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
