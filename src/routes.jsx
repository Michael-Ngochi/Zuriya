import Home from '@/pages/Home'
import About from '@/pages/About'
import Products from './pages/Products'
import IndividualProduct from './pages/IndividualProduct'


// import NotFound from '@/pages/NotFound'

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/products', element: <Products /> },
  { path: '/products/:slug', element: <IndividualProduct /> },

//   { path: '*', element: <NotFound /> },
]

export default routes
