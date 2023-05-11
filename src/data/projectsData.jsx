import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiReact,
  SiTailwindcss,
  SiRedux
} from './SkillsData'

export const projectsData = [
  {
    id: 0,
    type: 'frontend',
    title: 'Dashboard App',
    image:
      'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079355/dashboardImage-min_opyrce.png',
    deploy: 'https://misheds-app.vercel.app/dashboard',
    github: 'https://github.com/MichaellDev1/Dashboard-App',
    technologies: [
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript />,
      <SiTailwindcss />,
      <DiReact />
    ],
    description:
      'Aplicación administrativa con la simulación de compra de criptomonedas y precios actualizados.',
    newProject: true
  },
  {
    id: 1,
    type: 'frontend',
    title: 'App pelis',
    image:
      'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1683235598/screencapture-localhost-5173-2023-05-04-18_09_13_1_tey1yd.png',
    deploy: 'https://app-pelis-mishelds.vercel.app/',
    github: 'https://github.com/MichaellDev1/App-Pelis',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />, <DiReact />],
    description: 'Aplicación estilo netflix que muestra todas las peliculas.',
    newProject: true
  },
  {
    id: 2,
    type: 'frontend',
    title: 'E-commerce',
    image:
      'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682079356/ecommerceImage-min_lg0ts5.png',
    deploy: 'https://eccomerce-seven.vercel.app/',
    github: 'https://github.com/MichaellDev1/Ecommerce',
    technologies: [
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript />,
      <SiTailwindcss />,
      <DiReact />
    ],
    description:
      'E-commerce que muestra diferentes productos con la posibilidad de agregar los mismos al carrito.',
    newProject: false
  },
  {
    id: 3,
    type: 'frontend',
    title: 'ToDo App',
    image:
      'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1683133861/todoapp_w0hw8p.png',
    deploy: 'https://to-do-app-eosin-nine.vercel.app/',
    github: 'https://github.com/MichaellDev1/ToDo',
    technologies: [
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript />,
      <DiReact />,
      <SiRedux />
    ],
    description: 'ToDo App para la administracion de tareas del dia a dia.',
    newProject: true
  },
  {
    id: 4,
    type: 'frontend',
    title: 'Play Game',
    image:
      'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1682513022/screencapture-127-0-0-1-5500-index-html-2023-04-26-09_42_21_kpnhcn.png',
    deploy: 'https://page-game.vercel.app/',
    github: 'https://github.com/MichaellDev1/Game-Page',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiJavascript />],
    description:
      'Sitio web con diferentes clases de minijuegos echos en javascript con la intención de mostrar la parte tecnica del desarrollo a travez del codigo.',
    newProject: false
  },
  {
    id: 5,
    type: 'frontend',
    title: 'Manejador de ingresos y gastos',
    image:
      'https://res.cloudinary.com/dfkvvcfxs/image/upload/v1683753851/Screenshot_21_-min_g1zyuy.png',
    deploy: 'https://dashboard-amount.vercel.app/',
    github: 'https://github.com/MichaellDev1/balance-income-and-expenses',
    technologies: [
      <DiHtml5 />,
      <DiCss3 />,
      <DiJavascript />,
      <SiTailwindcss />,
      <DiReact />],
    description: 'Aplicación web donde se puede manejar los gastos e ingresos de nuestro dinero, con la integración de una gráfica para mostar el balance.',
    newProject: false
  }
]
