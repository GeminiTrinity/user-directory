import React, { useEffect, useState } from "react";
import Container from "./components/Container";
import UserContext from "./contexts/UserContext";
import "./styles.css";

export default function App() {
  const [users, setUser] = useState({
    users: []
  });

  useEffect(() => {
    const data = fetch("https://randomuser.me/api/?results=20");
    data
      .then((response) => response.json())
      .then((response) => setUser({ users: response.results }));
  }, []);

  return (
    <UserContext.Provider
      value={{
        data: users
      }}
    >
      <div className="App">
        <Container />
      </div>
    </UserContext.Provider>
  );
}
