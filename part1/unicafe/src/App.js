import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({clickHandler, text}) => (
  <button onClick={clickHandler}>
    {text}
  </button>
)

const StatisticLine = ({text, value}) => (
  <tr>
    <td>{text}</td> 
    <td>{value}</td>
  </tr>
  )

const Average = ({good, neutral, bad}) => {
  const average = (good - bad) / (good + neutral + bad)
  return (
    <tr>
      <td>average</td>
      <td>{average}</td>
    </tr>
    )
}

const Positive = ({good, neutral, bad}) => {
  const positive = good * 100 / (good + neutral + bad) 
  return (
    <tr>
      <td>positive</td>
      <td>{positive} %</td>
    </tr>
    )
} 

const Statistics = ({good, neutral, bad}) => {
  if (good + bad + neutral === 0) return (
    <div>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </div>
  )

  return (
    <div>
      <Title text="statistics" />

      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />

          <Average good={good} neutral={neutral} bad={bad} />

          <Positive good={good} neutral={neutral} bad ={bad} />
        </tbody>
      </table>
    </div>
  )
}


const App = () => {
  const [ good, setGood ] = useState(0)
  const [ neutral, setNeutral ] = useState(0)
  const [ bad, setBad ] = useState(0)

  const goodClick = () => setGood(good + 1)
  const neutralClick = () => setNeutral(neutral + 1)
  const badClick = () => setBad(bad + 1)

  return (
    <div>
      <Title text="give feedback" />

      <Button clickHandler={goodClick} text="good" />
      <Button clickHandler={neutralClick} text="neutral" />
      <Button clickHandler={badClick} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />

    </div>
  )
}

export default App