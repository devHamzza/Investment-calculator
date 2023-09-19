import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [currentSavings, setCurrentSavings] = useState();
  const [yearlyCont, setYearlyCont] = useState();
  const [expReturn, setExpReturn] = useState();
  const [duration, setDuration] = useState();

  const handleSavings = (event) => {
    setCurrentSavings(event.target.value);
  };

  const handleCont = (event) => {
    setYearlyCont(event.target.value);
  };

  const handleReturn = (event) => {
    setExpReturn(event.target.value);
  };

  const handleDuration = (event) => {
    setDuration(event.target.value);
  };

  const handleFormSubmit = (event) =>{
      event.preventDefault()
      const useInput = [currentSavings, yearlyCont, expReturn, duration]
      props.onFormSubmit(useInput)
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input type="number" onChange={handleSavings} id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input type="number" onChange={handleCont} id="yearly-contribution" />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input type="number" onChange={handleReturn} id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input type="number" onChange={handleDuration} id="duration" />
        </p>
      </div>
      <p className={styles["actions"]}>
        <button type="reset" className={styles["buttonAlt"]}>
          Reset
        </button>
        <button type="submit" className={styles["button"]}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
