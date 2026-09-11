import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import Auth from "./pages/authentication";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./pages/home";
import VideoMeet from "./pages/VideoMeet";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/:meetingCode" element={<VideoMeet />} />
             

                </Routes>
            </AuthProvider>
        </Router>
    );
}

export default App;