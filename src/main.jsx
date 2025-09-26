import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux"
import { store } from "@/store"
import { BrowserRouter} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";



createRoot(document.getElementById('root')).render(
<HelmetProvider>
<BrowserRouter>
<Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
</BrowserRouter>
</HelmetProvider>
)
