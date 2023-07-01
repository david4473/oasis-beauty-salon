import Image from "next/image";
import styles from "../styles/Pinned.module.css";

const Pinned = () => {
  return (
    <section>
      <div className="bg-[#F6E7D8] h-full">
        <div className=" mx-7 flex items-center justify-around px-8 py-10">
          <div className="w-[40%] shrink-0 h-4/5 text-center">
            <div className="mb-14">
              <h2 className=" text-5xl ">Our Services</h2>
            </div>
            <span className="text-3xl">Oasis Glam</span>
            <p className="mt-5">
              Indulge in the ultimate beauty experience with Oasis Glam. We will
              enhance your natural features and create a flawless look tailored
              to your preferences. Whether it's for a special occasion or simply
              to treat yourself, step into a world of elegance and radiate
              confidence.
            </p>
          </div>
          <div className={` ${styles.pinned_image} relative`}>
            <Image
              src={"/pinned_image_1.png"}
              alt="pinned image"
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

export default Pinned;
