// src/App.jsx
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainContent from './components/layout/MainContent';
import Jumbotron from './components/sections/Jumbotron';
import ComicsList from './components/sections/ComicsList';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header />

      {/* MainContent envolviendo las secciones del cuerpo mediante children */}
      <MainContent>
        <Jumbotron />
        <ComicsList />
      </MainContent>

      <Footer />
    </div>
  );
}