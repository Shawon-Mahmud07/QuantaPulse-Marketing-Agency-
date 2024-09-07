import proposal from "../assets/proposal.png";

const Proposal = () => {
  return (
    <section className=" py-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="relative bg-[#D9D9D9] rounded-md sm:rounded-3xl grid grid-cols-1 md:grid-cols-2 gap-6 py-6 px-4 sm:p-6 md:px-8 lg:p-12">
          {/* left side */}
          <div className="space-y-4 md:space-y-6 text-center md:text-start ">
            <h2 className="text-2xl md:text-3xl font-bold  text-gray-900">
              Let&apos;s Bring Your Vision to Life
            </h2>
            <p className="text-base text-gray-600">
              Connect with us today to explore how our tailored digital
              marketing strategies can elevate your business. Discover the
              powerful ways we can help you expand your online presence, drive
              engagement, and achieve long-term growth.
            </p>
            <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-colors duration-300">
              Request a proposal
            </button>
          </div>
          {/* right side */}
          <div className="lg:absolute md:flex items-center lg:flex-none lg:-top-5 xl:-top-10 lg:right-20 2xl:right-40 order-first md:order-last">
            <img
              className=" w-full max-h-64 lg:max-h-96 object-contain rounded-md"
              src={proposal}
              alt="proposal-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;