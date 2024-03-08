import Image from "next/image";

const Banner3 = () => {
  return (
    <div className="bg-[#FFB775] lg:h-[378px] h-[640px] w-full relative rounded-2xl mt-20 lg:block hidden">
      <Image src="/images/banner-3.svg" width={0} height={0} sizes="100vw" alt="Banner3" style={{ width: '100%', height: '100%' }} className="absolute rounded-2xl lg:block hidden" />
      
      <div className="flex lg:flex-row flex-col relative h-full">
        <div className="lg:w-1/2 flex lg:flex-col flex-row items-center z-[2] justify-center">
          <div className="lg:w-3/4 lg:text-start text-center">
            <div className="text-primary font-svn-gilroy-bold lg:text-[40px] text-[36px] flex">
              Adoption <Image src="/images/dog-foot.svg" width={50} height={50} alt="Dog Foot" className="ml-4" />
            </div>
            <div className="text-primary font-svn-gilroy-bold text-3xl">We need help. so do they.</div>
            <div className="text-primary font-svn-gilroy text-sm mt-4">
              Adopt a pet and give it a home,
              it will be love you back unconditionally.
            </div>
            <div className="flex mt-4 gap-4 justify-start">
              <button className="border border-2 rounded-full bg-primary text-white px-7 py-3 border-primary">Explore Now</button>
              <button className="border border-2 rounded-full lg:px-7 px-5 py-3 border-primary flex items-center">
                View Intro
                <div className="border border-2 border-primary rounded-full ml-3">
                  <Image src="/images/play-icon.svg" width={15} height={15} alt="Play Icon" />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-1/2">
          <Image src="/images/handshake.png" fill objectFit="contain" alt="Kiss Dog" className="lg:block hidden" />
        </div>
      </div>
    </div>
  )
}
export default Banner3;