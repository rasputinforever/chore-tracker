import React from "react";

// components
import Home from "./components/Home";

// context
export const UserNameContext = React.createContext()

const App = () => {
  
  const [userName, setUserName] = React.useState(getUserName())

  function getUserName() {
    const savedUserName = JSON.parse(localStorage.getItem('userName'));
    if (savedUserName) {
      return savedUserName
    } else {
      return ''
    }
  }

  return (
    <UserNameContext.Provider value={userName}>
      <Home />

    </UserNameContext.Provider>
  );
};

export default App;
