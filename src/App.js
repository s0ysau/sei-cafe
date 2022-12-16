import './App.css';
import { useState, useEffect } from 'react'
import AuthPage from './pages/Auth/AuthPage';
import NewOrderPage from './pages/NewOrder/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistory/OrderHistoryPage';
import { Routes, Route } from "react-router-dom"
import NavBar from './components/NavBar';
import FruitsPage from './pages/Fruits/FruitsPage';

function App() {
  const [state, setState] = useState(null)
  const [user, setUser] = useState(null)
  const fetchState = async () => {
    try {
      const response = await fetch('api/test')
      const data = await response.json()
      setState(data)
    } catch (err) {
      console.error(err)
    }
  }


  useEffect(() => {
    fetchState()
  }, [])

  return (
    <main className="App">
    
      { user ?
      <>
        <NavBar />
        <Routes>
          <Route path="/fruits" element={<FruitsPage />} />
          <Route path="/orders/new" element={<NewOrderPage />} />
          <Route path="/orders" element={<OrderHistoryPage />} />
        </Routes>
        </>
          :
          <AuthPage />
      }
  </main>
  );
}

export default App;
