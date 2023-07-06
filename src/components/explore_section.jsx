import Image from "next/image";

const Explore_section = () => {
  return (
    <section>
      <div className="w-full h-full relative overflow-hidden">
        <div className="w-full md:py-52 py-36 -z-10">
          <Image
            className="md:object-cover object-contain brightness-50 "
            src={"/masonry.png"}
            fill
            priority
          />
        </div>
        <div className="text-center h-full w-full absolute top-0 left-0 flex justify-center items-center flex-col gap-4">
          <h3 className="text-5xl font-medium text-slate-50">
            Explore Gallery
          </h3>
          <a href="#">
            <img src="/images/chev.svg" alt="navigation to explore page" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Explore_section;
