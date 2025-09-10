import { Routes, Route } from "react-router-dom"
import Day1 from "./Pages/Day1testing.tsx"
import './App.css'

function App() {

  return (     
    <div >
      <Routes>
        <Route path="/day1" element={<Day1 />} />
      </Routes>
    </div>
  
  )

  


}

export default App
