import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import authService from "./appwrite/auth";
import { login, logout } from "./features/authSlice";
import { Footer, Header } from "./components";

function App() {
  const [loading, setLoading] = useState(true); // is true when page initally renders
  const dispatch = useDispatch();

  useEffect(() => {
    // handle redux state
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
          return;
        }
        dispatch(logout());
      })

      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex flex-wrap mmin-h-screen content-between bg-red-100">
      <div className="w-full block">
        <Header />
        <main> Main </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
