import {
  BriefcaseBusinessIcon,
  Code2Icon,
  GraduationCapIcon,
} from "lucide-react";
import { IconType } from "react-icons";
import { DiAndroid, DiFirebase, DiGit, DiMongodb } from "react-icons/di";
import { FaBehance } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SlPicture } from "react-icons/sl";
import { TbWorld } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

type InfoList = {
  icon: IconType;
  title: string;
  description: string;
};

export const InfoList: InfoList[] = [
  {
    icon: Code2Icon,
    title: "Languages",
    description: "HTML, CSS, JavaScript, ReactJs, NextJs",
  },
  {
    icon: GraduationCapIcon,
    title: "Education",
    description: "Computer Science",
  },
  {
    icon: BriefcaseBusinessIcon,
    title: "Projects",
    description: "Build 10+ projects",
  },
];

export const toolsList = [VscVscode, DiFirebase, DiMongodb, FiFigma, DiGit];

export const serviceData = [
  {
    icon: TbWorld,
    title: "Web design",
    description: "Web development is the process of building, programming",
    link: "",
  },
  {
    icon: DiAndroid,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: FaBehance,
    title: "UI/UX",
    description: "UI/UX design focuses on creating a seamless user experience",
    link: "",
  },
  {
    icon: SlPicture,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication",
    link: "",
  },
];

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/sample.jpg",
  },
  {
    title: "Collaborative Document Editing App",
    description: "Mobile Design",
    bgImage: "/sample.jpg",
  },
  {
    title: "Language learning app",
    description: "Web Design",
    bgImage: "/sample.jpg",
  },
  {
    title: "Team chat app",
    description: "Web Design",
    bgImage: "/sample.jpg",
  },
];
