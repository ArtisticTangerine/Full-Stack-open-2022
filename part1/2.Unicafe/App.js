import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  if (all === 0) {
    return <div>No feedback given</div>;
  }
  const average = () => (good - bad) / all;
  const positive = () => (good / all) * 100 + " %";

  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={all} />
        <StatisticLine text="average" value={average()} />
        <StatisticLine text="positive" value={positive()} />
      </tbody>
    </table>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const GoodClick = () => setGood(good + 1);
  const NeutralClick = () => setNeutral(neutral + 1);
  const BadClick = () => setBad(bad + 1);
  return (
    <div>
      <h1>Give feedback</h1>
      <Button onClick={GoodClick} text="good" />
      <Button onClick={NeutralClick} text="neutral" />
      <Button onClick={BadClick} text="bad" />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
