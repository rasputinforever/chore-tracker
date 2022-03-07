import React from "react";

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
      <div>Chores!!!</div>
    </UserNameContext.Provider>
  );
};

export default App;
