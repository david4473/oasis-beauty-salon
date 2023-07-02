import Image from "next/image";
import styles from "../styles/section_2.module.css";

const Section_2 = () => {
  return (
    <section>
      <div className="h-full">
        <div className="grid grid-cols-2 max-w-6xl mx-auto place-items-center ">
          <div className={`${styles.section_2__image} relative`}>
            <Image
              src={"/section_2_image.png"}
              className="object-contain"
              fill
              priority
            />
          </div>
          <div className="">
            <h2>We also offer Home service</h2>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_2;
