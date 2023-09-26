import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LoginForm from "./pages/auth/login";
import { AuthProvider } from "./components/AuthContext";
import RegisterForm from "./pages/auth/Register";
import Footer from "./components/Footer";
import PublisherDashboard from "./pages/PublisherDashboard";
import BookUploadForm from "./components/BookUploadForm";
import NotificationPage from "./components/Notification";
import ViewMyBooks from "./components/ViewMyBooks";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/publisherdashboard" element={<PublisherDashboard /> } />
          <Route path="/publish-book" element={<BookUploadForm /> } />
          <Route path="/view-my-books" element={<ViewMyBooks />} />
          <Route path="/notification" element={<NotificationPage /> } />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
