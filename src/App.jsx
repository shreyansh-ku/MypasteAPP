import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Paste from './components/Paste'
import Navbar from './components/Navbar'
import Viewpaste from './components/Viewpaste'
const router = createBrowserRouter(
  [
    {
    path:"/",
    element:
    <div>
      <Navbar/>
      <Home />
    </div>
  },
  {
    // .........................
    path:"/AllPaste",
    element :
    <div>
       <Navbar/>
       <Paste/>

    </div>
  },
  {
  path:"/pastes/:id",
  element:
  <div>
    <Navbar/>
    <Viewpaste/>

  </div>
},
]
);
function App() {
  return (
      <div>
        <RouterProvider router={router}/>
      </div>
  )
}

export default App
