import Image from "next/image";
import styles from "../styles/section_2.module.css";
import Button from "./Button";

const Section_two = () => {
  return (
    <section>
      <div className="h-full">
        <div className="flex justify-around max-w-7xl mx-auto py-24 items-center ">
          <div className={`${styles.section_2__image} relative shrink-0 `}>
            <Image
              src={"/section_2_image.png"}
              className="object-contain"
              fill
              priority
            />
          </div>
          <div className="w-[40%] shrink-0 h-4/5">
            <h2 className="text-5xl mb-8">We also offer Home service</h2>
            <span>
              Indulge in the ultimate luxury of our home service, bringing
              professional makeup artistry directly to you. Our skilled makeup
              artists will create stunning looks tailored to your unique style
              and preferences, all within the comfort of your own space.
              Experience the convenience and personalized attention as our
              experts transform you into a vision of beauty, whether it's for a
              special event, a photoshoot, or simply to elevate your everyday
              look.
            </span>
            <Button text={"Book Now"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_two;
