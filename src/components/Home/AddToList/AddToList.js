import React from "react";
import Button from "../../UI/Button/Button";
import styles from "./AddToList.module.css";

function AddToList() {
  return (
    <div className={styles.addToList}>
      <form>
        <input
          type="text"
          name="name"
          autoComplete="off"
          required
        />
        <label htmlFor="name">Name</label>
        <input />
        <input />
        <div className={styles.addToListButton}>
          <Button button="Confirm" />
        </div>
      </form>
    </div>
  );
}

export default AddToList;
