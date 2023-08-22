const Page = () => {
  return (
    <section>
      <div className="w-3/5 p-16 mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-4xl mb-2">Contact Form</h1>
          <p>Filling This Form Will help you reach me directly In no Time</p>
        </div>
        <form>
          <label className="label" htmlFor="name">
            Full Name
          </label>
          <input className="input" type="text" id="name" />
          <br />
          <label className="label" htmlFor="email">
            Email Address
          </label>
          <input className="input" type="email" id="email" />
          <br />
          <label className="label" htmlFor="subject">
            Subject
          </label>
          <input className="input" type="text" id="subject" />
          <br />
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            className="input h-20 focus:h-auto transition"
            name="message"
            id="message"
            cols="30"
            rows="10"
          />
          <button
            type="submit"
            className="block bg-[#BF7C63] text-slate-50 py-2 px-8 rounded-md mx-auto text-xs"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
