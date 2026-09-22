// src/components/sections/Jumbotron.jsx
import jumbotronImg from '../../assets/img/jumbotron.jpg';

/**
 * Sezione Jumbotron per il banner principale.
 * Utilizza importazione di assets statici gestita da Vite.
 */
export default function Jumbotron() {
  return (
    <section className="w-full h-80 overflow-hidden bg-neutral-800">
      <img 
        src={jumbotronImg} 
        alt="DC Comics Heroes Jumbotron" 
        className="w-full h-full object-cover object-top"
      />
    </section>
  );
}