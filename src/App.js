import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/NavBar/NavBar";
import accounts from "./Accounts";

function App(props) {
  const [checkAccount, setCheckAccount] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setCheckAccount({
      ...checkAccount,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const usernameCheck = accounts.filter((uName) =>
      uName.username.includes(checkAccount.username)
    );

    if (
      usernameCheck.map((uName) => uName.username).toString() ===
        checkAccount.username &&
      usernameCheck.map((pWord) => pWord.password).toString() ===
        checkAccount.password
    ) {
      setIsLoggedIn(true);
      localStorage.setItem("LogInStorageData", "1");
    } else {
      setError("Incorrect username or password.");
    }
  }

  useEffect(() => {
    const isLocalStorage = localStorage.getItem("LogInStorageData");
    if (isLocalStorage === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className={styles.app}>
      <NavBar isLoggedIn={isLoggedIn} />
      {!isLoggedIn && (
        <Login
          valueUsername={checkAccount.username}
          valuePassword={checkAccount.password}
          onSubmit={handleSubmit}
          onChange={handleChange}
          error={error}
        />
      )}
      {isLoggedIn && <Home />}
    </div>
  );
}

export default App;
