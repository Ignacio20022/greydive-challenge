import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Route exact path='/:id' component={Home}/>
        </BrowserRouter>
    </div>
  )
}

export default App
