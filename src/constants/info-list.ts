import {
  BriefcaseBusinessIcon,
  Code2Icon,
  GraduationCapIcon,
} from "lucide-react";
import { IconType } from "react-icons";
import { DiFirebase, DiGit, DiMongodb } from "react-icons/di";
import { FiFigma } from "react-icons/fi";
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
