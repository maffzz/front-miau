import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import Duenos from "./components/Duenos";

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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usuario/todos"
          element={
            <ProtectedRoute>
              <Duenos />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;