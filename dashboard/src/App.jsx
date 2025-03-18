import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import './index.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home/>}/>
          <Route path="/dashboard/" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
