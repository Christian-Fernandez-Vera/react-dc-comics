// src/components/layout/Footer.jsx
import fbIcon from '../../assets/img/footer-facebook.png';
import twIcon from '../../assets/img/footer-twitter.png';
import ytIcon from '../../assets/img/footer-youtube.png';
import ptIcon from '../../assets/img/footer-pinterest.png';
import psIcon from '../../assets/img/footer-periscope.png';
import Button from '../ui/Button';

export default function Footer() {
  const socialIcons = [
    { name: 'Facebook', src: fbIcon },
    { name: 'Twitter', src: twIcon },
    { name: 'YouTube', src: ytIcon },
    { name: 'Pinterest', src: ptIcon },
    { name: 'Periscope', src: psIcon }
  ];

  return (
    <footer className="bg-neutral-800 text-white">
      {/* Barra de llamada a la acción y redes sociales */}
      <div className="bg-neutral-900 py-6 border-t border-neutral-700">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Button variant="secondary">
            Sign-up Now!
          </Button>

          <div className="flex items-center gap-4">
            <span className="text-blue-500 font-bold uppercase text-sm tracking-wider">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              {socialIcons.map((icon) => (
                <a key={icon.name} href="#" className="hover:opacity-80 transition-opacity">
                  <img src={icon.src} alt={icon.name} className="w-8 h-8 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}