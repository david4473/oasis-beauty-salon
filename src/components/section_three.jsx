import Image from "next/image";
import Button from "./Button";

const Section_three = () => {
  return (
    <section>
      <div className="h-full">
        <div className="flex justify-around max-w-7xl mx-auto py-24 items-center ">
          <div className="w-[40%] shrink-0 h-4/5">
            <h2 className="text-5xl mb-8">
              Browse Oasis Glam Photoshoot Galllery
            </h2>
            <span>
              With a keen eye for aesthetics and attention to detail, we create
              captivating compositions that highlight your best features.
              Whether it's a solo shoot, couple's session, or a group
              photoshoot, our photographers have the expertise to bring your
              vision to life.
            </span>
            <Button text={"Book Now"} />
          </div>
          <div className="relative max-w-4xl w-96 h-96">
            <Image
              src={"/section_3_image.png"}
              className="object-contain"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_three;
