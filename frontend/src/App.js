import { BrowserRouter, Routes, Route } from "react-router-dom";

import RouteList from "./routes/routes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RouteList />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
