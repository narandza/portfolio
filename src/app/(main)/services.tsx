import { serviceData } from "@/constants/info-list";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 ">
      <h4 className="text-center mb-2 text-lg ">What I offer</h4>
      <h2 className="text-center text-5xl">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-lg">
        I am a frontend developer from Belgrade, Serbia with 3+ years of
        experience
      </p>

      <div className="grid grid-cols-4 gap-6 my-10 place-items-center">
        {serviceData.map(({ icon: Icon, title, description, link }, index) => (
          <div className="w-full" key={index}>
            <Icon className="w-10" />
            <h3 className="text-xl my-4">{title}</h3>
            <p className="text-sm leading-5">{description}</p>
            <Link
              href={link}
              className="flex items-center gap-1 text-muted-foreground"
            >
              Read more <ArrowRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
