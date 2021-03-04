import React from "react";

const UserContext = React.createContext({
  data: {
    users: [],
  }
});

export default UserContext;
