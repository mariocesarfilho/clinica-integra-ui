import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from './pages/login'
import { CreateAccount } from './components/CreateAccount'
import { Home } from './pages/home'


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
