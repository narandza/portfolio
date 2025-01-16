import {
  BriefcaseBusinessIcon,
  ChartBarDecreasingIcon,
  Code2Icon,
  GraduationCapIcon,
  WebcamIcon,
} from "lucide-react";
import { IconType } from "react-icons";
import { BiMobile } from "react-icons/bi";
import { DiFirebase, DiGit, DiMongodb } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { PiGraphicsCard } from "react-icons/pi";
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
    icon: WebcamIcon,
    title: "Web design",
    description: "Web development is the process of building, programming",
    link: "",
  },
  {
    icon: BiMobile,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: ChartBarDecreasingIcon,
    title: "UI/UX",
    description: "UI/UX design focuses on creating a seamless user experience",
    link: "",
  },
  {
    icon: PiGraphicsCard,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication",
    link: "",
  },
];
