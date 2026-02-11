import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './components/Login'
import { CreateAccount } from './components/CreateAccount'
import { Home } from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criar-conta" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
