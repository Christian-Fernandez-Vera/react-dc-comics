// src/components/ui/Button.jsx

/**
 * Componente pulsante riutilizzabile.
 * Usa props.children per consentire qualsiasi contenuto interno (testo, icone, badge).
 */
export default function Button({ children, variant = 'primary', onClick }) {
  // Stili di base condivisi
  const baseStyles = "px-8 py-2 font-bold uppercase text-xs tracking-wider transition-all duration-200 cursor-pointer select-none";

  // Varianti di stile con Tailwind
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-md active:scale-95",
    secondary: "bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-600"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary}`}
    >
      {/* children rende tutto ciò che metti tra <Button> e </Button> */}
      {children}
    </button>
  );
}