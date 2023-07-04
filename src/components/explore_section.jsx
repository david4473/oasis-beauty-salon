import Image from "next/image";

const Explore_section = () => {
  return (
    <section>
      <div className="w-full h-full relative">
        <div className="w-full h-full inset-0">
          <Image
            className="object-contain"
            src={"/masonry.png"}
            fill
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Explore_section;
