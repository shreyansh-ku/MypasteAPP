import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { useState,useEffect } from 'react'
import { createContext } from 'react'
import Home from './components/Home'
import Paste from './components/Paste'
import Navbar from './components/Navbar'
import Viewpaste from './components/Viewpaste';
const themechanger=createContext();
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
  // for dark mode 
  const [theme,settheme]=useState("light");
  
  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) settheme(savedTheme);
  }, []);

  // Save theme on change
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);


  return (
    <themechanger.Provider value={{
      theme,settheme}}>
          <div className={theme === 'light' ? 'bg-white text-black min-h-screen' : 'bg-black text-white min-h-screen'}>
        <RouterProvider router={router}/>
      </div>
      </themechanger.Provider>
  )
}

export default App;
export {themechanger};
