import React from "react";
import styles from "./Result.module.css";

const Result = (props) => {
  return (
    <>
      <table className={styles.result}>
        <thead>
          <tr>
            <th>year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        {props.yearlyData.map((year) => (
          <tbody  key={year.id}>
            <tr>
              <td>{year.year}</td>
              <td>{Math.round(year.savingsEndOfYear)}</td>
              <td>{Math.round(year.yearlyInterest)}</td>
              <td>{Math.round(year.totalInterestGained)}</td>
              <td>{Math.round(year.totalInvestedCapital)}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
};

export default Result;
