import { getDefaultNormalizer } from "@testing-library/dom";
import React from "react";
import AmountCard from "../../UI/AmountCard/AmoutCard";
import DateCard from "../../UI/DateCard/DateCard";
import NameCard from "../../UI/NameCard/NameCard";
import styles from "./ShowList.module.css";
import loans from '../../../Loans';

function ShowList(props) {

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

  const date = props.dateLoan;
  const dateLoan = new Date(date);
  const dateDue = new Date(date);
  dateDue.setDate(dateDue.getDate() + 7);

  const nameLoan = props.nameLoan;
  const loanAmount = props.loanAmount;

  const formatter = new Intl.NumberFormat('en-PH', {
    style: "currency",
    currency: 'PHP',
  })

  return (
    <div className={styles.showList}>
      <div className={styles.showListData}>
        <div className={styles.date}>
          <DateCard month={monthName[dateLoan.getMonth()]} day={dateLoan.getDate()} year={dateLoan.getFullYear()} />
          <DateCard month={monthName[dateDue.getMonth()]} day={dateDue.getDate()} year={dateDue.getFullYear()} />
        </div>
        <div>
          <NameCard>
              {nameLoan}
          </NameCard>
        </div>
        <div className={styles.showListAmountCard}>
          {/* <AmountCard>{`₱${loanAmount}`}</AmountCard>
          <AmountCard>{`₱${loanAmount*0.10}`}</AmountCard> */}
          <AmountCard>{formatter.format(loanAmount)}</AmountCard>
          <AmountCard>{formatter.format(loanAmount*0.10)}</AmountCard>
        </div>
      </div>
    </div>
  );
}

export default ShowList;