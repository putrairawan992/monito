import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-screen rounded-b-4xl w-full bg-secondary justify-center flex flex-col">
      <div>
        <Image src="images/banner.svg" fill alt="Banner" className="absolute lg:block hidden" />
        <Image src="images/banner-mobile.svg" fill alt="Banner" className="absolute lg:hidden" />
      </div>
      <div className="flex lg:flex-row flex-col h-full z-2 relative lg:justify-center lg:mt-0 mt-28 items-center lg:px-40 px-5">
        <div className="lg:mx-auto w-auto">
          <div className="flex flex-col">
            <div className="text-primary lg:text-[60px] text-[38px] font-svn-gilroy-bold font-extrabold">One more friend</div>
            <div className="text-primary lg:text-[46px] text-2xl font-svn-gilroy-bold font-extrabold">Thousands more fun!</div>
            <div className="font-bold lg:text-base text-xs mt-5">
              Having a pet means you have more joy, a new friend, a happy person who will always 
              be with you to have fun. We have 200+ different pets that can meet your needs!
            </div>
          </div>
          <div className="flex mt-10 flex-row gap-4">
            <button className="border border-2 rounded-full lg:px-10 px-5 py-3 border-primary flex items-center">
              View Intro
              <div className="border border-2 border-primary rounded-full ml-3">
                <Image src="/images/play-icon.svg" width={15} height={15} alt="Play Icon" />
              </div>
            </button>
            <button className="border border-2 rounded-full bg-primary text-white lg:px-10 px-5 py-3 border-primary">Explore Now</button>
          </div>
        </div>
        <div className="bottom-0 inset-x-0 absolute lg:relative lg:self-end lg:h-auto">
          <Image src="/images/banner-dog-foto.png" width={2000} height={400}  alt="Banner Dog" className="lg:block hidden" />
          <Image src="/images/banner-dog-foto-mobile.png" width={2000} height={400}  alt="Banner Dog" className="lg:hidden" />
        </div>
      </div>
    </div>
  )
}
export default Banner;