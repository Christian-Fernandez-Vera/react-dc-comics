// src/components/layout/Header.jsx
import dcLogo from '../../assets/img/dc-logo.png';

const NAV_LINKS = [
  { id: 1, label: 'Characters', url: '#', isActive: false },
  { id: 2, label: 'Comics', url: '#', isActive: true },
  { id: 3, label: 'Movies', url: '#', isActive: false },
  { id: 4, label: 'TV', url: '#', isActive: false },
  { id: 5, label: 'Games', url: '#', isActive: false },
  { id: 6, label: 'Collectibles', url: '#', isActive: false },
  { id: 7, label: 'Videos', url: '#', isActive: false },
  { id: 8, label: 'Fans', url: '#', isActive: false },
  { id: 9, label: 'News', url: '#', isActive: false },
  { id: 10, label: 'Shop', url: '#', isActive: false },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-neutral-200">
      <div className="container mx-auto px-4 flex items-center justify-between h-24">
        <a href="#" className="h-16 w-16 block">
          <img src={dcLogo} alt="DC Comics Logo" className="h-full w-auto object-contain" />
        </a>

        <nav className="h-full">
          <ul className="flex items-center gap-6 h-full font-bold text-xs uppercase tracking-wider">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="h-full flex items-center relative">
                <a
                  href={link.url}
                  className={`flex items-center h-full transition-colors ${link.isActive
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