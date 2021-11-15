import React, { useState } from "react";
import loans from "../../Loans";
import Button from "../UI/Button/Button";
import AddToList from "./AddToList/AddToList";
import EditList from "./EditList/EditList";
import styles from "./Home.module.css";
import ShowList from "./ShowList/ShowList";

function Home() {

  const [option, setOption] = useState('showList')

  function handleAddToList() {
    setOption("addToList")
  }

  function handleShowList() {
    setOption("showList")
  }
  function handleEditList() {
    setOption("editList")
  }

  return (
    <div className={styles.loan}>


      <div className={styles.loanBox}>
        <div className={styles.loanHeader}>
          <h1>Loans</h1>
        </div>
        <div className={styles.loanButton}>
          <Button button="Add to List" onClick={handleAddToList} />
          <Button button="Show List" onClick={handleShowList} />
          <Button button="Edit List" onClick={handleEditList} />
        </div>
      </div>
      <div className={styles.loanShow}>
        <div className={styles.loanShowBox}>
          {option === 'showList' && loans.map(dataLoans => {
            return <ShowList dateLoan={dataLoans.dateStart} nameLoan={dataLoans.name} loanAmount={dataLoans.loan} />
          })}

          {option === 'addToList' && <AddToList />}
          {option === 'editList' && <EditList />}
        </div>
      </div>
    </div>
  );
}

export default Home;
