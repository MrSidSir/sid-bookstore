import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import  { AuthProvide } from './context/AuthContext.jsx'
import  'sweetalert2/dist/sweetalert2.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AuthProvide> {/* ✅ wrap everything inside AuthProvide */}
        <RouterProvider router={router} />
      </AuthProvide>
    </Provider>
  </StrictMode>
)
