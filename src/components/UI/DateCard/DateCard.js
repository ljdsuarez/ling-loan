import React from "react";
import styles from "./DateCard.module.css";

function DateCard(props) {
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = "October 28, 2021";
  const dateLoan = new Date(date);
  const dateDue = new Date(date);
  dateDue.setDate(dateDue.getDate() + 7);

  return (
    <div>
     

      <div className={styles.dateCard}>
        <div>{props.month}</div>
        <div className={styles.dayFont}>{props.day}</div>
        <div>{props.year}</div>
      </div>
    </div>
  );
}

export default DateCard;
