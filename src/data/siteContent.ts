import type { SiteContent } from "@types";

export const SITE_CONTENT: SiteContent = {
  //Presentation
  hero: {
    name: "Michael Steven Garcia Santa",
    specialty: "Desarrollador software FullStack",
    summary:
      "Líder en Desarrollo de Software, con más de 6 años de experiencia en el sector digital. He gestionado y desarrollado más de 18 proyectos de alto impacto, optimizando procesos y mejorando la eficiencia operativa en un 30 % en diversas organizaciones. He liderado la transformación de aplicaciones y sitios web para entidades públicas y privadas, desarrollando soluciones personalizadas que destacan en entornos desafiantes.",
    email: "michaelsanta88@gmail.com",
  },

  //Experience
  experience: [
    {
      company: "LinkTIC",
      position: "Líder en Desarrollo de Software",
      startDate: "Ene 2022",
      endDate: "Actualmente",
      summary: [
        "Desarrollé soluciones web personalizadas y escalables en LinkTic, liderando proyectos que respondieron a las necesidades específicas de los clientes mediante tecnologías modernas.Creé portales dinámicos con CMS, Laravel, Svelte, ORM, mejorando el rendimiento web en un 80% y logrando experiencias de usuario más fluidas, lo que incrementó la satisfacción de los clientes significativamente.Implementé Docker para la contenedorización y despliegue eficiente, reduciendo significativamente los tiempos de implementación y mejorando la estabilidad de los entornos.Automaticé flujos de trabajo con Azure DevOps y gestioné infraestructura en la nube con AWS, lo que resultó en entregas ágiles, escalables y de alta calidad en todos los proyectos.",
      ],
    },
    {
      company: "Okappi",
      position: "Desarrollador Full Stack",
      startDate: "Ene 2021",
      endDate: "Abr 2022",
      summary: [
        "Diseñé y desarrollé aplicaciones y sitios web en Okappi, utilizando tecnologías avanzadas como CMS, Next.js, Node.js, React y Astro. Optimizando el rendimiento con JavaScript para crear experiencias digitales innovadoras, funcionales y alineadas con las necesidades del cliente. Implementé pruebas unitarias y optimicé los procesos de desarrollo y despliegue, asegurando entregas rápidas, eficientes y de alta calidad. Lideré la gestión de proyectos con Jira, Slack y Trello, facilitando la colaboración entre equipos y garantizando el cumplimiento de plazos con un enfoque en calidad y detalle.",
      ],
    },
    {
      company: "Enovel",
      position: "Desarrollador Web / Frontend",
      startDate: "Jun 2015",
      endDate: "Oct 2016",
      summary: [
        "Desarrolle soluciones dinámicas y optimizadas, de sitios web, utilizando tecnologías como WordPress, MySQL, Angular, PHP y JavaScript, entregando productos personalizados que optimizan funcionalidades y garantizan una experiencia de usuario atractiva y eficiente.Diseñé interfaces de usuario interactivas con Figma, priorizando accesibilidad y rendimiento, e implementé sistemas escalables adaptados a las necesidades estratégicas del negocio, mejorando la capacidad de respuesta y sostenibilidad de los proyectos.Implemente estándares de desarrollo y optimización de procesos, Aplicando prácticas de control de versiones con Git y enfoqué mis esfuerzos en la optimización para entornos de producción, asegurando la entrega de soluciones robustas, eficientes y alineadas con los objetivos empresariales.",
      ],
    },
  ],

  //Education
  education: [
    {
      academy: "Fundación Universitaria Ucompensar",
      position: "Ingeniería de Software",
      startDate: "2021",
      endDate: "Actualmente",
    },
    {
      academy: "SENA",
      position: "Tecnico en comercio internacional",
      startDate: "2015",
      endDate: "2016",
    },
    {
      academy: "Colegio Colombia Viva",
      position: "Bachillerato academico",
      startDate: "2014",
      endDate: "2014",
    },
  ],

  //Projects
  projects: [
    {
      name: "Equidad Seguros",
      summary: "A music streaming app that emulates Spotify's core features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/../assets/images/projects/spotifu.png",
    },
    {
      name: "Porvida",
      summary: "An e-commerce platform that replicates Shopify's key features.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/../assets/images/projects/shopify-clon.png",
    },
    {
      name: "ODT, La rolita",
      summary: "A social network that replicates the features of Instagram",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/../assets/images/projects/clone-ig.png",
    },
  ],

  //Skills
  skills: [
    {
      nameTechnology: "astro",
    },
    {
      nameTechnology: "angular",
    },
    {
      nameTechnology: "svelte",
    },
    {
      nameTechnology: "react",
    },
    {
      nameTechnology: "typeScript",
    },
    {
      nameTechnology: "tailwindcss",
    },
    {
      nameTechnology: "nextJS",
    },
    {
      nameTechnology: "nodejs",
    },
    {
      nameTechnology: "azureDevOps",
    },
    {
      nameTechnology: "laravel",
    },
    {
      nameTechnology: "github",
    },
    {
      nameTechnology: "docker",
    },
    {
      nameTechnology: "mysql",
    },
    {
      nameTechnology: "bash",
    },
  ],

  //About description
  about: {
    description: `
      Cuento con habilidades en Front-end como Core-JavaScript, Next, Angular, Svelte, React, Tailwind CSS, y a nivel Back-end Laravel y NodeJS, además de experiencia en Docker, Azure DevOps, GitHub, GitLab y CMS WordPress y Shopify. Mi enfoque está en impulsar la innovación, optimizar procesos y garantizar la excelencia en cada entrega. Soy un profesional orientado a resultados, capaz de integrar metodologías ágiles para alcanzar los objetivos del negocio y generar impacto real.
    `,
    image: "/../assets/images/profile/alejandro-big.jpg",
  },
};
