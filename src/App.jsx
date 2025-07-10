import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/Home.jsx';
import { Navbar } from './components/pages/Navbar.jsx';
import { Skills } from './components/pages/Skills.jsx';
import { Footer } from './components/pages/Footer.jsx';
import { Experience } from './components/pages/Experience.jsx';

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experiences" element={<Experience />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
};
