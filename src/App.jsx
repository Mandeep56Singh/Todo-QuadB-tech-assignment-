// src/App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {  persistor } from "./store/store";
import Home from "./pages/Home";
import Login from "./pages/Login";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  return user ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </PersistGate>
  );
}

export default App;
