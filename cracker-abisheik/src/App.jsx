import React, { useState, useEffect } from "react";
import "./App.css";
import SignIn from "./authentication/Signin";
import Main from "./components/Main";
import { Routes, Route, Navigate } from "react-router-dom";


function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Check user login from localStorage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setIsSignedIn(true);
      setUser(savedUser);
    }
  }, []);

  const signOut = () => {
    setIsSignedIn(false);
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      
      {/* If NOT signed in → show login */}
      {!isSignedIn ? (
        <Routes>
          {/* Default: redirect to signin */}
          <Route path="/" element={<Navigate to="/signin" />} />

          <Route
            path="/signin"
            element={<SignIn setIsSignedIn={setIsSignedIn} />}
          />
        </Routes>
      ) : (
        <>
          <Routes>
            {/* Show Main UI after login */}
            <Route
              path="/"
              element={
                <Main
                  user={user}
                  isSignedIn={isSignedIn}
                  signOut={signOut}
                />
              }
            />

            {/* If logged in and user visits /signin → redirect */}
            <Route path="/signin" element={<Navigate to="/" />} />
            
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
