import Image from "next/image";

export const About = () => {
  return (
    <div id="about" className=" w-full px-[12%] py-10 scroll-mt-20 mt-[220px]">
      <h4 className="text-center mb-2 text-lg ">Introduction</h4>
      <h2 className="text-center text-5xl ">About me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src="/placeholder-image.png"
            alt="Profile Image"
            width={320}
            height={320}
            className="rounded-3xl"
          />
          <div className="flex-1">
            <p className="mb-10 max-w-2xl ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident reprehenderit sint a voluptate ab itaque, ratione
              aperiam. Doloremque vero repudiandae, totam, accusamus velit, quod
              quia quasi veritatis quidem consequuntur atque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
