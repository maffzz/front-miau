import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/protegido"
          element={
            <ProtectedRoute>
              <div>contenido protegido</div>
            </ProtectedRoute>
          }
        />
        {/* otras rutas */}
      </Routes>
    </Router>
  );
}

export default App;