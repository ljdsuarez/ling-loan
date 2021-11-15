import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import styles from './NavBar.module.css';

function NavBar(props) {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    function handleSubmit() {
         setIsLoggedIn(false);
         localStorage.removeItem("LogInStorageData");
    }


    return <div className={styles.navBar}>
        <div className={styles.navBarTitle}>Ling-Loan</div>
        <div className={styles.navBarWhiteSpace}></div>
        <div className={styles.navBarLinks}>Loans</div>
        <div className={styles.navBarLinks}>Contacts</div>
        <div className={styles.navBarSearch}>
            <input type='text' placeholder='Search'/>
        </div>
        <div className={styles.logoutButton}>
            <form onSubmit={handleSubmit}>
           {props.isLoggedIn && <Button button="Logout" type="submit" /> } 
           </form>
            </div>
    </div>;
}

export default NavBar;