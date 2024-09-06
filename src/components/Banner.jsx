import bannerImg from "../assets/bannerImg.png";
import brand1 from "../assets/banner-brand/logo-1.png";
import brand2 from "../assets/banner-brand/logo-2.png";
import brand3 from "../assets/banner-brand/logo-3.png";
import brand4 from "../assets/banner-brand/logo-4.png";
import brand5 from "../assets/banner-brand/logo-5.png";
import brand6 from "../assets/banner-brand/logo-6.png";

const Banner = () => {
  return (
    <section id="about" className="bg-white mt-2  lg:pt-12 ">
      <div className="max-w-[1440px]  mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24  ">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* left side */}
          <div className="md:w-1/2 ">
            <div className="w-full  xl:w-9/12 lg:leading-loose ">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font bold text-secondary mb-4">
                Empowering Businesses to Thrive in the Digital World
              </h1>
              <p className="text-gray-600 mb-6">
                Our digital marketing solutions drive growth and success by
                leveraging SEO, PPC, social media, and content strategies
                tailored to your business needs.
              </p>
              <button className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-colors duration-300 ">
                Book a consultation
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="md:w-1/2 order-first md:order-last">
            <img
              className="w-full h-auto rounded-md"
              src={bannerImg}
              alt="banner-img"
            />
          </div>
        </div>

        {/* brand slider logo */}
        <div className="pt-10  overflow-hidden w-full">
          <div className=" flex justify-between space-x-6 md:space-x-12 items-center animate-marquee">
            <img className="h-10 md:h-12" src={brand1} alt="brand-img" />
            <img className="h-10 md:h-12" src={brand2} alt="brand-img" />
            <img className="h-10 md:h-12" src={brand3} alt="brand-img" />
            <img className="h-10 md:h-12" src={brand4} alt="brand-img" />
            <img className="h-10 md:h-12" src={brand5} alt="brand-img" />
            <img className="h-10 md:h-12" src={brand6} alt="brand-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
