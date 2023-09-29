import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from "./Components/LandingPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
    </Route>
  )
)

const App = () => {
  return(
    <RouterProvider router={router} />
  )
  
}

export default App