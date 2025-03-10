import './App.css'
import IntroReact from './containers/intro-react/intro-react.jsx';

function App() {

  return (
    <div>
      <h1>Demo 01</h1>
      <IntroReact nb={42} />
      <hr />
      <IntroReact />
    </div>
  )
}

export default App
