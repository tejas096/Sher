const HomeContact = () => {
  let row = window.innerWidth < 640 ? 4 : 3;
  return (
    <div className="h-full lg:ml-auto w-[320px] xs:w-full md:w-[600px] xl:w-[700px] 2xl:w-[820px] max-sx:pb-[10px] flex flex-col gap-[20px] sx:gap-[45px] items-start">
      <h1 className="max-lg:w-full max-lg:text-center text-[36px] xs:text-[48px] xl:text-[68px] font-semibold leading-[1.1em]">
        Let's Create
        <br /> Something <span className="text-[rgb(145,75,241)]">Amazing</span>
      </h1>
      <div className="bg-[rgba(43,45,47,255)] w-full lg:w-[600px] p-[20px] rounded-xl">
        <form className="space-y-4">
          <div>
            <label className="block text-white mb-2 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg bg-[rgba(69,68,70,255)] text-[rgb(217,217,217)] placeholder-[rgb(217,217,217)] focus:outline-none focus:ring-1 focus:ring-[rgb(145,75,241)]"
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Your@email.com"
              className="w-full px-4 py-2 rounded-lg bg-[rgba(69,68,70,255)] text-[rgb(217,217,217)] placeholder-[rgb(217,217,217)] focus:outline-none focus:ring-1 focus:ring-[rgb(145,75,241)]"
            />
          </div>
          <div>
            <label className="block text-white mb-2 font-semibold">
              Message
            </label>
            <textarea
              placeholder="Your Message"
              rows={row}
              className="w-full px-4 py-2 rounded-lg bg-[rgba(69,68,70,255)] text-[rgb(217,217,217)] placeholder-[rgb(217,217,217)] focus:outline-none focus:ring-1 focus:ring-[rgb(145,75,241)] resize-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[rgb(145,75,241)] text-white font-semibold rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomeContact;
