import { DiCss3, DiHtml5, DiJavascript, DiReact, SiTailwindcss } from './SkillsData'

export const projectsData = [
  {
    id: 0,
    title: 'Dashboard App',
    image: 'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079355/dashboardImage-min_opyrce.png',
    deploy: 'https://dashboard-admin-hp7r38hxv-michaelldev1.vercel.app/dashboard',
    github: 'https://github.com/MichaellDev1/Dashboard-App',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <SiTailwindcss />, <DiReact />],
    description: 'Aplicación administrativa con la simulación de compra de criptomonedas y precios actualizados.',
    newProject: true
  }, {
    id: 1,
    title: 'App pelis',
    image: 'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079356/appPelisImage-min_wx8ba7.png',
    deploy: 'https://app-pelis-michaelldev1.vercel.app/',
    github: 'https://github.com/MichaellDev1/App-Pelis',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />],
    description: 'Aplicación estilo netflix que muestra todas las peliculas.',
    newProject: true
  }, {
    id: 2,
    title: 'E-commerce',
    image: 'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079356/ecommerceImage-min_lg0ts5.png',
    deploy: 'https://e-commerce-f7mzr1bwt-michaelldev1.vercel.app/',
    github: 'https://github.com/MichaellDev1/Dashboard-App',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <SiTailwindcss />, <DiReact />],
    description: 'E-commerce que muestra diferentes productos con la posibilidad de agregar los mismos al carrito.',
    newProject: true
  }
]
