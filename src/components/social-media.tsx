import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface SocialMediaProps {
  iconSize: number;
}

const SocialMediaLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jovanovic-dimitrije",
    icon: FaLinkedin,
  },
  {
    name: "GitHub",
    link: "https://github.com/narandza",
    icon: FaGithub,
  },
];

export const SocialMedia = ({ iconSize }: SocialMediaProps) => {
  return (
    <>
      {SocialMediaLinks.map(({ link, icon: Icon }, index) => (
        <Link key={index} href={link} target="_blank">
          <Icon size={iconSize} />
        </Link>
      ))}
    </>
  );
};
