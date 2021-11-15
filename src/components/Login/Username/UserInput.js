import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./UserInput.module.css";

function UserInput(props) {
  return (
    <div>
      <div className={styles.error}>
        <p>{props.error}</p>
      </div>
      <form onSubmit={props.onSubmit}>
        <div className={styles.userInput}>
          <input
            type="text"
            name="username"
            autoComplete="off"
            value={props.valueUsername}
            onChange={props.onChange}
            required
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className={styles.userInput}>
          <input
            type="password"
            name="password"
            autoComplete="off"
            value={props.valuePassword}
            onChange={props.onChange}
            required
          />
          <label htmlFor="password">Password</label>
          <div className={styles.loginButton}>
            <Button button="Login" type="submit" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserInput;
