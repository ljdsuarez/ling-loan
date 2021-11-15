import React from "react";
import styles from './AmountCard.module.css'

function AmountCard(props) {
    return <div className={styles.amountCard}>
        {props.children}
    </div>
;}

export default AmountCard;