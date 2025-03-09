import { StaticImageData } from "next/image";

interface IProject {
  id: string;
  title: string;
  type: string;
  imagen?: StaticImageData;
  date: string;
  link: string;
  tools: string;
  demo: string;
  github: string;
}

export default IProject;
