import { useEffect, useState } from 'react'
import './App.css'
import players from './assets/players-new-latest.png';
import { BasicCricketOutcomes } from './components/BasicCricketOutcomes'
import { SuperOverOutcomes } from './components/SuperOverOutcomes';
import { BowlTypes, ShotTypes, TimingTypes } from './configs/constant';
// const partialCricketData: Partial<ICricketData> = cricketData
function App() {
  const [deliveries,] = useState(BowlTypes);
  const [shots,] = useState(ShotTypes);
  const [timings,] = useState(TimingTypes);


  return (
    <>
      <img className="playerImage" style={{ height: 250 }} src={players} />
      <h1>Cricket Outcomes Predictor</h1>
      {/* <BasicCricketOutcomes deliveries={deliveries} shots={shots} timings={timings} /> */}
      <SuperOverOutcomes deliveries={deliveries} shots={shots} timings={timings} />
    </>
  )
}

export default App
