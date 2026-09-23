// src/components/sections/ComicsList.jsx
import comicsData from '../../data/comics';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ComicsList() {
  return (
    <section className="bg-neutral-900 py-10 relative">
      <div className="container mx-auto px-4">
        {/* Etiqueta flotante superior */}
        <div className="absolute -top-5 left-10">
          <span className="bg-blue-600 text-white font-black text-lg px-6 py-2 uppercase tracking-wider shadow-md">
            Current Series
          </span>
        </div>

        {/* Grid de comics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 pt-4">
          {comicsData.map((comic) => (
            <Card 
              key={comic.id} 
              image={comic.thumb} 
              title={comic.series || comic.title} 
            />
          ))}
        </div>

        {/* Botón de carga centralizado con Children */}
        <div className="flex justify-center mt-8">
          <Button variant="primary">
            Load More
          </Button>
        </div>
      </div>
    </section>
  );
}