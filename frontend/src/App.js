import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/dashboard/ResponsiveNavbar";
import Signin from "./components/authentication/signin";
import Signup from "./components/authentication/signup";
import Home from './components/dashboard/Home';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signin />}>
      </Route>
      <Route path="/signup" element={<Signup />}>
      </Route>
      <Route path="/home" element={<Home />}>
      </Route>

    </Routes>
  </BrowserRouter>
  );
}

export default App;
