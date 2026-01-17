import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import 'antd/dist/reset.css'; // Import Ant Design styles
import './App.css'; 

function App() {
  return (
    <Router>
      {/* Removed "app-container" div because LandingPage now handles 
         its own full-screen layout and background video.
      */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        {/* Redirect old paths to Home if desired, or simply remove them.
           Since the form is now a popup on the home page, explicit 
           routes to a separate form page are no longer needed.
        */}
        <Route path="*" element={<LandingPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;