import React, { useContext } from "react";

// context is created
const UserContext = React.createContext();

// provider
function UserProvider({ children }) {
  const user = "Authi";

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

function UserProfile() {
  // using hook to access data (user)
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Use Context Hook</h2>
      <p>User: {user}</p>
    </div>
  );
}

function UseContextEx() {
  return (
    // render UserProvider to make data available
    // render UserProfile to display data
    <UserProvider>
      <div>
        <UserProfile />
      </div>
    </UserProvider>
  );
}

export default UseContextEx;
