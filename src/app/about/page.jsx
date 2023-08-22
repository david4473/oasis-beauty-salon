import Image from "next/image";

const page = () => {
  return (
    <section>
      <div className="relative after:content-[url('/images/ellipse.svg')] after:absolute after:-bottom-40 after:right-44 after:rotate-[133deg] after:-z-10">
        <div className="flex mx-auto my-28 justify-center items-center w-4/5 gap-20">
          <div className="w-[160rem] relative after:content-[url('/images/ellipse.svg')] after:absolute after:top-36">
            <h1 className="text-5xl text-center mb-10">About Arya Glam</h1>
            <p>
              Meet Shantel, the visionary leader behind Arya Glam. With a
              passion for beauty and a drive for excellence, Simbiat has built
              Oasis into a renowned brand that embodies luxury, style, and
              personalized beauty experiences. As an experienced entrepreneur in
              the beauty industry, Simbiat has honed their expertise in makeup
              artistry and understands the transformative power it holds. Their
              journey began with a deep-rooted love for makeup and a desire to
              empower individuals to embrace their unique beauty.
            </p>
          </div>
          <div className="relative aspect-square w-[128rem] min-w-[20rem]  after:content-[url('/images/ellipse.svg')] after:absolute after:top-5 after:-left-20 after:rotate-[77deg]">
            <Image className="z-10 " src="/images/about-image.png" fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
