import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import Landing from './components/Landing/Landing'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/:client/:test" component={Home}/>
                <Route path="*" component={NotFound} />
            </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App
