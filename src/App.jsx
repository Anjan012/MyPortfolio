import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./components/Navbar.jsx";
import { Error } from "./error/Error.jsx";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;