import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import styles from '../App/App.module.scss'
import { getUser } from '../../utilites/users-service'
import AuthPage from '../Auth/AuthPage'
import NewOrderPage from '../NewOrder/NewOrderPage'
import OrderHistoryPage from '../OrderHistory/OrderHistoryPage'

export default function App () {
  const [user, setUser] = useState(getUser())
  return (
    <main className={styles.App}>
      {user
        ? <>
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path='/orders' element={<OrderHistoryPage user={user} setUser={setUser} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path='/*' element={<Navigate to='/orders/new' />} />
          </Routes>
          </>
        : <AuthPage setUser={setUser} />}
    </main>
  )
}
