import './App.css'
import IntroReact from './containers/intro-react/intro-react.jsx';
import NumberDisplay from './containers/number-display/number-display.jsx';
import PlantDisplay from './containers/plant-display/plant-display.jsx';

function App() {

  return (
    <div>
      <h1>Demo 01</h1>

      <h2>Part 01</h2>
      <IntroReact nb={42} />
      {/* <IntroReact /> */}

      <h2>Part 02</h2>
      <NumberDisplay value={13} />
      {/* <hr />
      <NumberDisplay value={42} />
      <hr />
      <NumberDisplay value={-5} /> */}

      <h2>Part 03</h2>
      <PlantDisplay />
    </div>
  )
}

export default App
