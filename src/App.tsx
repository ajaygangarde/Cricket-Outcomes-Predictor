import './App.css'
import players from './assets/players-new-latest.png';
import { SuperOverOutcomes } from './components/SuperOverOutcomes';
import { BowlTypes, ShotTypes, TimingTypes } from './configs/constant';
function App() {


  return (
    <>
      <img className="playerImage" style={{ height: 250 }} src={players} />
      <h1>Cricket Outcomes Predictor</h1>
      <SuperOverOutcomes deliveries={BowlTypes} shots={ShotTypes} timings={TimingTypes} />
    </>
  )
}

export default App
