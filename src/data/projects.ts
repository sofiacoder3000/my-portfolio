import impostorGameApp from "@images/projects/impostor-game-app.png";
import qorilabsWeb from "@images/projects/qorilabs-web.png";
import appTaskManager from "@images/projects/app-task-manager02.png";
import lightPortfolio from "@images/projects/portfolio-light.png";
import darkPortfolio from "@images/projects/portfolio-dark.png";
import listasYPerfiles from "@images/projects/listas-y-perfiles.png";
import blogPrueba from "@images/projects/blog-prueba.png";
import IProject from "@/interfaces/project";


export const PROJECTS_DATA: IProject[] = [
  {
    id: "impostor-game-app",
    type: "Design & Mobile Development",
    tools: "React Native | Typescript | Expo",
    title: "Impostor Game App",
    imagen: impostorGameApp,
    date: "2026",
    link: "https://apps.apple.com/es/app/el-impostor-juego-palabras/id6758422236",
    demo:"",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.qorilabs.impostorgame&hl=es",
    appleStoreUrl: "https://apps.apple.com/us/app/the-impostor-word-game/id6758422236",
    // github: ""
  },
  {
    id: "qorilabs-web",
    type: "Front End",
    tools: "React | Typescript | WebPack",
    title: "Qorilabs Web",
    imagen: qorilabsWeb,
    date: "2026",
    link: "",
    demo: "https://qorilabs.dev",
    github: "https://github.com/sofiacoder3000/qorilabs-web"
  },
  {
    id: "task-manager-app",
    type: "Design & Mobile Development",
    tools: "React Native | Typescript | SQLite",
    title: "Task Manager App",
    imagen: appTaskManager,
    date: "2024",
    link: "",
    demo: "",
    github: "https://github.com/sofiacoder3000/tasks-manager-react-native"
  },
  {
    id: "light-portfolio",
    type: "Design & Development",
    tools: "HTML | CSS | JavaScript | NextJS | TailwindCSS",
    title: "Light Portfolio Personal",
    imagen: lightPortfolio,
    date: "2023",
    link: "",
    demo: "https://portfolio-jakeline-campos.vercel.app/",
    github: "https://github.com/sofiacoder3000/my-portfolio"
  },
  {
    id: "dark-portfolio",
    type: "Design & Development",
    tools: "HTML | CSS | JavaScript | NextJS | TailwindCSS",
    title: "Dark Portfolio Personal",
    imagen: darkPortfolio,
    date: "2023",
    link: "",
    demo: "https://portfolio-jakeline-campos.vercel.app/",
    github: "https://github.com/sofiacoder3000/my-portfolio"
  },
  {
    id: "lists-and-profile-detail",
    type: "Front End",
    tools: "HTML | CSS | JavaScript | ReactJS | WebPack",
    title: "Lists and Profile Detail",
    imagen: listasYPerfiles,
    date: "2023",
    link: "",
    demo: "https://dreamcode.vercel.app/",
    github: "https://github.com/sofiacoder3000/dreamcode-challenge"
  },
  {
    id: "basic-blog",
    type: "Front End",
    tools: "HTML | CSS | JavaScript | NextJS | ReactJS | WebPack",
    title: "Basic Blog",
    imagen: blogPrueba,
    date: "2023",
    link: "",
    demo: "https://nextjs-blog-one-gilt.vercel.app/",
    github: "https://github.com/sofiacoder3000/nextjs-blog"
  }
];