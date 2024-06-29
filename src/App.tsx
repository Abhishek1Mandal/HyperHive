import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPagesRoutes from "./Routes/MainPagesRoutes";
import DashBoardRoutes from "./Routes/DashBoardRoutes";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<MainPagesRoutes />} />
        <Route path="/dashboard*" element={<DashBoardRoutes />} />
      </Routes>
    </Router>
  );
};

export default App;
