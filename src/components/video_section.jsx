const Video_section = () => {
  return (
    <section className="mt-32">
      <div className="w-full h-[400px] relative">
        <video
          className="w-full h-full brightness-50 absolute object-cover -z-10 inset-0"
          src="/videos/video_3.mp4"
          muted="true"
          loop="true"
          autoPlay="true"
        ></video>
        <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h3 className="text-3xl text-slate-50 ">
            We Are Open and You’re welcome!
          </h3>
          <button className="mx-auto mt-4 block rounded-md px-6 py-2 border-2 border-red-50 text-slate-50">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Video_section;
