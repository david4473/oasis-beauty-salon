import Image from "next/image";
import styles from "../styles/Hero.module.css";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="overflow-hidden" id="#">
      <div className=" flex justify-center bg-[#754730] h-[500px] px-6 ">
        <div className="w-screen flex items-center basis-1/2  relative z-10 left-10">
          <div>
            <p className="text-4xl text-slate-50 w-[40rem] font-normal">
              Step into Your Personalized Beauty Oasis and Unleash Your Inner
              Radiance
            </p>
            <Button text={"Book Now"} pd_x={"px-16"} mg_y={"my-6"} />
          </div>
        </div>
        <div className={`${styles.hero__image} basis-1/2 relative right-10`}>
          <Image
            src={"/hero_img.png"}
            alt="hero image"
            className="object-cover"
            fill
            priority
          />
        </div>
      </div>
      <div
        className={` ${styles.hero__marquee_container} py-[1rem] px-[0.3rem] bg-[#F6E7D8] w-screen mb-20`}
      >
        <div className="flex gap-5 items-center overflow-x-hidden">
          <div
            className={` ${styles.hero__marquee__item} flex gap-5 items-center shrink-0`}
          >
            <span className="text-4xl font-medium">
              Book us. Set Your Preferred Time. And Get Glamed up
            </span>
            <img src="/star_8.svg" alt="star svg icon" className="w-5" />
          </div>
          <div
            className={`${styles.hero__marquee__item} flex gap-5 items-center shrink-0`}
          >
            <span className=" text-4xl font-medium">
              Book us. Set Your Preferred Time. And Get Glamed up
            </span>
            <img src="/star_8.svg" alt="star svg icon" className="w-5" />
          </div>
          <div
            className={` ${styles.hero__marquee__item} flex gap-5 items-center shrink-0`}
          >
            <span className="text-4xl font-medium">
              Book us. Set Your Preferred Time. And Get Glamed up
            </span>
            <img src="/star_8.svg" alt="star svg icon" className="w-5" />
          </div>
          <div
            className={`${styles.hero__marquee__item} flex gap-5 items-center shrink-0`}
          >
            <span className=" text-4xl font-medium">
              Book us. Set Your Preferred Time. And Get Glamed up
            </span>
            <img src="/star_8.svg" alt="star svg icon" className="w-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
