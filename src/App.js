import React, { useState } from "react";
import logo from "./assets/investment-calculator-logo.png";
import Form from "./components/form/Formi";
import Header from "./components/header/Header";
import Result from "./components/result/Result";

function App() {
  const [yearlyDataN, setYearlyDataN] = useState([]);
  const calculateHandler = (userInput) => {

    const yearlyData = []; // per-year results

    let currentSavings = +userInput[0];
    const yearlyContribution = +userInput[1];
    const expectedReturn = +userInput[2] / 100;
    const duration = +userInput[3];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      const totalInvestedCapital = yearlyContribution * (i+1)
      const totalInterestGained = currentSavings - totalInvestedCapital;
      yearlyData.push({

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
        totalInvestedCapital: totalInvestedCapital,
        totalInterestGained: totalInterestGained,
        id: 'e' + Math.random()
      });
    }

    setYearlyDataN(yearlyData);
  };

  return (
    <>
      <Header logo={logo} />
      <Form onFormSubmit={calculateHandler} />
      {yearlyDataN.length !== 0 ? <Result yearlyData={yearlyDataN}/> : <p className="alterP">Enter data to Calculate your investment details.</p>}
    </>
  );
}

export default App;
