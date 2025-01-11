import Image from "next/image";

export const Header = () => {
  return (
    <header className="pt-16">
      <div className="pt-16">
        <Image
          src="/placeholder-image.png"
          alt="Profile Image"
          width={32}
          height={32}
          className="rounded-full"
        />
        <h3 className="text-xl md:text-2xl mb-3">
          Hi! I&apos;m Dimitrije Jovanovic
        </h3>

        <h1 className="text-3xl sm:tet-6xl lg:text-[66px] ">
          frontend web developer base in Belgrade.
        </h1>
        <p className="max-w-2xl mx-auto">
          I&apos;m a frontend developer from Belgrade, Serbia with 3+ years of
          experience
        </p>
      </div>
    </header>
  );
};
