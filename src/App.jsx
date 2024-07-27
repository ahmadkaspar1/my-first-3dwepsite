
import {Home,About,Project}from "./pages";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; 

const App = ()=>{

    return(
      <main className="bg-slate-100-400">
<Router>
<Navbar/>
<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/Project" element={<Project/>}></Route>
</Routes>
</Router>
      </main>
    )
}
export default App;