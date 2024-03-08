import Image from "next/image";

const SellerLists = () => {
  return (
    <div className="lg:block hidden mt-20">
      <div className="flex justify-between">
        <div><span className="text-bold">Proud to be part of</span> <span className="font-svn-gilroy-bold text-xl text-primary">Pet Sellers</span></div>
        <div className="lg:block hidden">
          <button className="border border-2 rounded-full border-primary text-primary items-center py-2 px-7 flex">
            View all our sellers
            <Image src="/images/chevron-down.svg" width={9} height={9} alt="Arrow" className="ml-4 -rotate-90 mt-1" /> 
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 justify-center items-center mt-5">
        <div className="align-center justify-center flex items-center">
          <Image src="/images/sellers/image 4.png" width={90} height={90} alt="Seller" />
        </div>
        <div className="align-center justify-center flex items-center">
          <Image src="/images/sellers/image 6.png" width={90} height={90} alt="Seller" />
        </div>
        <div className="align-center justify-center flex items-center">
          <Image src="/images/sellers/image 7.png" width={90} height={90} alt="Seller" />
        </div>
        <div className="align-center justify-center flex items-center">
          <Image src="/images/sellers/image 8.png" width={90} height={90} alt="Seller" />
        </div>
        <div className="align-center justify-center flex items-center">
          <Image src="/images/sellers/image 9.png" width={90} height={90} alt="Seller" />
        </div>
        <div className="align-center justify-center flex items-center">
          <Image src="/images/sellers/image 10.png" width={90} height={90} alt="Seller" />
        </div>
        <div className="align-center justify-center flex items-center">
          <Image src="/images/sellers/image 11.png" width={90} height={90} alt="Seller" />
        </div>
      </div>
    </div>
  )
}
export default SellerLists;