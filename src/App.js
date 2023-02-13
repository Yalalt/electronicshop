import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;

/* 
App layout struct
    /pages
        Home
            /components
            Header
                Menu
            Footer
            Basket
            Orders
            Products List
                Product
            Logout
        Login
        Register            
 */