import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./page/Home"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import User from "./page/User"
import CreateData from "./page/CreateData";

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>

    <Route exact path="/" element={<Home />} />
    <Route exact path="/user" element={<User />}/>
    <Route exact path="/senddata" element={<CreateData />} />

    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
