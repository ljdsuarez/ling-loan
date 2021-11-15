import React from 'react';
import styles from './Button.module.css';

function Button(props) {
    return <button className={styles.button} onClick={props.onClick}>{props.button}</button>;
}

export default Button;