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

export const WorkExperience = [
  {
    company: "HyperOptic",
    position: "Network & IT Operations Technician",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-11-31"),
    description: [
      "Execute switch replacements following established procedures",
      "Collaborate with network maintenance team to schedule maintenance",
      "Coordinate with Network Engineers and IT Operations Engineers to resolve technical issues",
      "Keep senior engineers updated on project status, and challenges while ensuring compliance",
      "Provide training and knowledge transfer for improved technical proficiency",
      "Document all project activities and contribute to progress reports",
    ],
  },
  {
    company: "HTEC Group",
    position: "Frontend Web Developer ",
    startDate: new Date("2022-12-01"),
    endDate: new Date("2023-01-31"),
    description: [
      "Gained practical experience in software testing using Scrum methodology	",
      "Worked with React library for web application development",
      "Created project tasks and contributed to document preparation",
      "Participated in daily stand-up meetings and collaborated on task solutions",
      "Completed a professional English language course.",
      "Conducted Sprint-end demonstrations to showcase practical learning outcomes.",
    ],
  },
];

export const CONTACT_EMAIL = "dimitrijejovanovic90210@gmail.com";

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
    title: "Document Editing",
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
