import React from 'react';
import styles from './Login.module.css';
import UserInput from './Username/UserInput';


function Login(props) {


    return <div className={styles.login}>
        <div className={styles.loginBox}>
            <div className={styles.loginHeader}>
                <h1>Login</h1>
               <UserInput  valueUsername={props.valueUsername} valuePassword={props.valuePassword} onSubmit={props.onSubmit} onChange={props.onChange} error={props.error} />
            </div>
            <div>

            </div>
        </div>
    </div>
}

export default Login;