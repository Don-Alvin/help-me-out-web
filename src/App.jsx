import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import Auth from "./Pages/Auth"
import Videos from "./Pages/Videos"
import Video from "./Pages/Video"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/videos' element={<Videos />} />
      <Route path='/videos/:id' element={<Video />} />
    </Route>
  )
)

const App = () => {
  return(
    <>
      <RouterProvider router={router} />
    </>
    
  )
  
}

export default App