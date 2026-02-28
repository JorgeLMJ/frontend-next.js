import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // ⚠️ IMPORTANTE: Reemplaza esto con tu dominio real cuando lo compres (ej: https://motoresingenieros.com)
  const baseUrl = 'https://tudominio.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly', // Cada cuánto actualizas la página
      priority: 1, // Prioridad máxima porque es tu página de inicio (Landing Page)
    },
    
    /* 💡 NOTA: Como tu página actual es una "Landing Page" (todo en una sola vista), 
       solo necesitas el bloque de arriba. 
       
       Si en el futuro creas páginas separadas, simplemente las agregas aquí abajo así:
    {
      url: `${baseUrl}/portal-clientes`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    */
  ];
}