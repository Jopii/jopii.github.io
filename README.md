# Jesús Jódar — Portfolio

Portfolio personal de **Jesús Jódar**, Visual Artist & AI Enthusiast. Sitio web construido con Astro y Tailwind CSS, desplegado en GitHub Pages.

## Tecnologías

- [Astro](https://astro.build/) — Framework web estático
- [Tailwind CSS](https://tailwindcss.com/) — Utilidades CSS
- [GitHub Pages](https://pages.github.com/) — Hosting

## Estructura

```
src/
├── components/
│   ├── Navbar.astro       # Navegación sticky con scroll spy
│   ├── Hero.astro         # Sección principal con animaciones
│   ├── About.astro        # Perfil y biografía
│   ├── Skills.astro       # Skills técnicos y áreas de enfoque
│   ├── Gallery.astro      # Portfolio con lightbox y filtros
│   ├── Footer.astro       # Footer con contacto y redes sociales
│   └── ScrollToTop.astro  # Botón flotante para volver al inicio
├── layouts/
│   └── Layout.astro       # Layout base con SEO y meta tags
├── pages/
│   └── index.astro        # Página principal
└── styles/
    └── global.css         # Estilos globales y animaciones
```

## Comandos

| Comando           | Acción                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Instala dependencias                        |
| `npm run dev`     | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`   | Genera el sitio de producción en `./dist/`  |
| `npm run preview` | Previsualiza el build localmente            |

## Licencia

© Jesús Jódar. Todos los derechos reservados.
