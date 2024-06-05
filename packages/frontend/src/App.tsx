import logo from './assets/logo.jpeg'
import {Link} from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
      <img src={logo} className="logo" alt="BookHub logo" />
      <h1>BookHub</h1>
      <h2>The place to share</h2>
      <div className="flex">
        <Link to={'/sign-in'}>Se connecter</Link>
        <Link to={'/admin'}>Se connecter comme admin</Link>
      </div>
    </>
  )
}

export default App
