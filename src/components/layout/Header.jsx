// src/components/layout/Header.jsx
import dcLogo from '../../assets/img/dc-logo.png';
import { NAV_LINKS } from '../../data/navLinks';

export default function Header() {
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-28">
        {/* Logotipo DC */}
        <a href="#" className="h-20 w-20 flex items-center">
          <img src={dcLogo} alt="DC Comics Logo" className="max-h-full w-auto object-contain" />
        </a>

        {/* Navegación iterada con el BONUS */}
        <nav className="h-full">
          <ul className="flex items-center gap-6 h-full font-bold text-xs uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="h-full flex items-center relative">
                <a
                  href={link.url}
                  className={`flex items-center h-full transition-colors ${
                    link.isActive 
                      ? 'text-blue-600 border-b-4 border-blue-600' 
                      : 'text-neutral-700 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}