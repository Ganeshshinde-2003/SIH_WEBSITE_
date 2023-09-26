import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginForm from "./pages/auth/login";
import { AuthProvider } from "./components/AuthContext";
import RegisterForm from "./pages/auth/Register";
import Footer from "./components/Footer";
import BookDetails from "./pages/BookDetails";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/bookdetials/:id" element={<BookDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
