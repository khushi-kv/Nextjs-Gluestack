"use client";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useContext, useEffect } from "react";

interface AuthContextType {
  ref:any;
  username: string;
  isLoggedIn: boolean;
  isUsernameValid: boolean;
  showModal: boolean;
  showModal1: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setShowModal1: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: (loggedInUsername: string) => void;
  handleLogout: () => void;
  handleUsernameChange: (event: any) => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  storeUsernameLocally: (username: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const Store: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState<boolean>(true);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showModal1, setShowModal1] = useState<boolean>(false);
  const ref = React.useRef(null);
  const handleLogin = (loggedInUsername: string) => {
    setUsername(loggedInUsername);
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    storeUsernameLocally("");
    setIsLoggedIn(false);
    setUsername("");
    router.push("/");
  };
  const handleUsernameChange = (event: any) => {
    const newUsername = event.target.value;
    setUsername(newUsername);
    setIsUsernameValid(newUsername.length >= 3);
  };
  const storeUsernameLocally = (username: string) => {
    localStorage.setItem("username", username);
  };
  useEffect(() => {
    const User = localStorage.getItem("username");
    if (User) {
      setIsLoggedIn(true);
      setUsername(User);
    }
  }, []);

  const value: AuthContextType = {
    ref,
    username,
    isLoggedIn,
    isUsernameValid,
    showModal,
    showModal1,
    setShowModal,
    setShowModal1,
    handleLogin,
    handleLogout,
    handleUsernameChange,
    setIsLoggedIn,
    storeUsernameLocally,
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
