import Image from "next/image";

const Banner2 = () => {
  return (
    <div className="bg-primary lg:h-[378px] h-[640px] w-full relative rounded-2xl mt-20">
      <Image src="/images/banner-2.svg" width={0} height={0} sizes="100vw" alt="Banner2" style={{ width: '100%', height: '100%' }} className="absolute rounded-2xl lg:block hidden" />
      <Image src="/images/banner-2-mobile.svg" width={0} height={0} sizes="100vw" alt="Banner2" style={{ width: '100%', height: '100%' }} className="absolute rounded-2xl lg:hidden" />
      
      <div className="flex lg:flex-row flex-col p-7 relative h-full">
        <div className="w-1/2 lg:order-first order-last">
          <Image src="/images/kiss-dog.png" width={520} height={342} alt="Kiss Dog" className="lg:block hidden" />
          <Image src="/images/kiss-dog-mobile.png" width={550} height={260} alt="Kiss Dog" className="lg:hidden self-end absolute bottom-0" />
        </div>
        <div className="lg:w-1/2 flex lg:flex-col flex-row items-center z-[2] justify-center">
          <div className="lg:w-3/4 lg:text-end text-center">
            <div className="text-primary font-svn-gilroy-bold lg:text-[40px] text-[36px]">One more friend</div>
            <div className="text-primary font-svn-gilroy-bold text-2xl">Thousands more fun!</div>
            <div className="text-primary font-svn-gilroy text-sm mt-4">
              Having a pet means you have more joy, a new friend, 
              a happy person who will always be with you to have fun. 
              We have 200+ different pets that can meet your needs!
            </div>
            <div className="flex mt-4 gap-4 justify-end">
              <button className="border border-2 rounded-full lg:px-7 px-5 py-3 border-primary flex items-center">
                View Intro
                <div className="border border-2 border-primary rounded-full ml-3">
                  <Image src="/images/play-icon.svg" width={15} height={15} alt="Play Icon" />
                </div>
              </button>
              <button className="border border-2 rounded-full bg-primary text-white px-7 py-3 border-primary">Explore Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Banner2;