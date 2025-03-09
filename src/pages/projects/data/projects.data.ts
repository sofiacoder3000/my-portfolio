import appTaskManager from "@images/projects/app-task-manager02.png";
import lightPortfolio from "@images/projects/portfolio-light.png";
import darkPortfolio from "@images/projects/portfolio-dark.png";
import listasYPerfiles from "@images/projects/listas-y-perfiles.png";
import blogPrueba from "@images/projects/blog-prueba.png";
import { Project } from "../components/Project";

export const PROJECTS_DATA: Project[] = [
  {
    id: "1",
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
    id: "2",
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
    id: "3",
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
    id: "4",
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
    id: "5",
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
