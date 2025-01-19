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

      <div className="grid grid-cols-auto lg:grid-cols-4 gap-6 my-10 ">
        {/* TODO: Make hover muted on other cards */}
        {serviceData.map(({ icon: Icon, title, description, link }, index) => (
          <div
            className="border border-muted rounded-lg px-8 py-12 flex flex-col items-center hover:shadow-md cursor-pointer hover:bg-muted hover:-translate-y-1 duration-500 "
            key={index}
          >
            {/* TODO: Add color constant */}
            <Icon className="size-10 bg-[#A31D1D] text-white rounded-sm p-2" />
            <h3 className="text-xl my-4">{title}</h3>
            <p className="text-sm leading-5">{description}</p>
            <Link
              href={link}
              className="flex items-center gap-1 text-muted-foreground text-sm mt-5"
            >
              Read more <ArrowRight className="size-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
