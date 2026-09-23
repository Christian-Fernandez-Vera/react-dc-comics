// src/components/layout/MainContent.jsx

/**
 * Layout Wrapper per il corpo dell'applicazione.
 * Usa children per iniettare qualsiasi gruppo di sezioni.
 */
export default function MainContent({ children }) {
  return (
    <main className="grow bg-neutral-900 w-full">
      {children}
    </main> 
  );
}