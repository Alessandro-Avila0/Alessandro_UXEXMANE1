
# Examen 1 UX - Alessandro avila

Reconstrucción de la página principal de YouTube Music con React, TypeScript y CSS.

**Autor:** Alessandro
**Clase:** UX

## Tecnologías
- React + TypeScript
- Vite
- CSS con variables (sin librerías de estilos)
- lucide-react (iconos)

## Cómo correrlo
```bash
npm install
npm run dev
```
Luego va abrir http://localhost:5173 puede copiarlo y pegarlo en algun navegador

## Estructura (Atomic Design)
- **atoms:** Chip, BotondePlay, Avatar, Boton
- **molecules:** NavItem, SearchBar, MusicCard, SectionHeader, SongRow, PlaylistItem
- **organisms:** Sidebar, TopBar, MoodChips, FeaturedSection, CardCarousel, QuickPicks
- **templates:** MainLayout
- **pages:** HomePage

## Funcionalidades
- Menú lateral, búsqueda y perfil
- Contenido destacado y carruseles de recomendaciones
- Tarjetas reutilizables para canción, álbum, playlist y video
- Diseño responsive (escritorio, tablet y móvil)
- Bono: cerrar sesión / vista "Not Logged In".