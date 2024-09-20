import React, { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      console.log("Retrieved user from localStorage:", parsedUser);
      setUser(parsedUser);
    }
  }, []);

  //LOGIN
  const login = (username) => {
    const newUser = { username, likedCats: [] };
    setUser(newUser);
    //Convert user objecto to string
    localStorage.setItem("user", JSON.stringify(newUser));
    console.log("User logged in:", newUser);
  };

  //LOGUT
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    console.log("User logged out");
  };

  const likeCat = (catId) => {
    if (user) {
      console.log("Attempting to like/unlike cat with ID:", catId);
      const updatedUser = {
        //copy user
        ...user,
        //if liked remove
        likedCats: user.likedCats.includes(catId)
          ? user.likedCats.filter((id) => id !== catId)
          : [...user.likedCats, catId],
      };
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
      console.log("Updated user after liking/unliking:", updatedUser);
    }
  };

  return (
    <UserContext.Provider value={{ user, login, logout, likeCat }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
