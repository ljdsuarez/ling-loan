import React from "react";
import styles from './NameCard.module.css'

function NameCard(props) {
    return <div className={styles.nameCard}>
       {props.children} 
    </div>;
}

export default NameCard;