import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainRoutes from "./Routes/MainRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
