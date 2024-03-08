import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="lg:h-[440px] h-[598px] bg-secondary relative mt-20 rounded-t-4xl w-full pt-[100px]">
      <div className="flex lg:flex-row flex-col bg-primary rounded-3xl w-[90%] mx-auto lg:p-7 p-4">
        <div className="text-white lg:font-svn-gilroy-bold lg:text-3xl text-xl lg:mb-0 mb-4">{`Register now so you don't miss our programs`}</div>
        <div className="bg-white p-3 rounded-xl lg:w-3/4 flex lg:flex-row flex-col">
          <input type="text" placeholder="Enter your Email" className="border border-[#99A2A5] lg:mb-0 mb-4 w-full rounded-xl p-4 focus:outline-[#99A2A5]" />
          <button className="bg-primary p-4 rounded-xl text-white lg:w-[200px] w-full lg:ml-4">Subscribe Now</button>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col w-[90%] mx-auto mt-7 justify-between">
        <div>
          <ul className="flex lg:gap-20 gap-10 justify-center lg:mb-0 mb-7 font-bold color-primary">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Category</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex lg:gap-20 gap-10 justify-center font-bold color-primary">
          <div><Image src="/images/facebook.png" width={20} height={20} alt="Facebook" /></div>
          <div><Image src="/images/twitter.png" width={20} height={20} alt="Facebook" /></div>
          <div><Image src="/images/instagram.png" width={20} height={20} alt="Facebook" /></div>
          <div><Image src="/images/youtube.png" width={20} height={20} alt="Facebook" /></div>
        </div>
      </div>
      <div className="border border-b-[#99A2A5] w-[90%] mx-auto mt-7"></div>
      <div className="flex lg:flex-row flex-col justify-between items-center w-[90%] mx-auto lg:mt-8 mt-3">
        <div className="lg:order-first order-last lg:text-base text-sm lg:mt-0 mt-1">© 2022 Monito. All rights reserved.</div>
        <div>
          <Image src="/images/monito-logo.svg" width={100} height={100} alt="Monito Logo" />
        </div>
        <div className="flex gap-6 lg:text-base text-sm lg:mt-0 mt-2">
          <div><Link href="#">Terms of Service</Link></div>
          <div><Link href="#">Privacy Policy</Link></div>
        </div>
      </div>
    </div>
  )
}
export default Footer;