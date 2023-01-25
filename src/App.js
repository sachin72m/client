import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/chatapp/login" element={<Login />} />
          <Route path="/chatapp/register" element={<Register />} />

          {/* <Route path="/" element={<ProtectRoute> <chatapp /> </ProtectRoute>} /> */}


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
