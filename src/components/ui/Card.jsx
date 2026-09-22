// src/components/ui/Card.jsx

/**
 * Componente Card para renderizar cada entrega de DC Comics.
 * Implementa la destrutturazione diretta di oggetti di scena con valori difettosi.
 */
export default function Card({ image, title }) {
  return (
    <article className="flex flex-col group cursor-pointer">
      <div className="aspect-square w-full overflow-hidden bg-neutral-900 mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <h3 className="text-xs uppercase font-semibold text-white tracking-wide line-clamp-2">
        {title}
      </h3>
    </article>
  );
}