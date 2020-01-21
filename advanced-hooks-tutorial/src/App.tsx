import React from "react";
import "./App.css";
import AdvancedHooksComponent from "./components/AdvancedHooksComponent";
import HomeComponent from "./components/HomeComponent";
export const UserContext = React.createContext("");

const App: React.FC = () => {
  const value = "Cordersara";
  return (
    <div className="App">
      <AdvancedHooksComponent />
      <UserContext.Provider value={value}>
        <HomeComponent />
      </UserContext.Provider>
    </div>
  );
};

export default App;
