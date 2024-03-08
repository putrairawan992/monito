import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      <div className={`lg:px-40 px-5 z-[7] py-5 flex items-center justify-between w-full fixed top-0 transition duration-300 ${isScrolled ? 'bg-secondary' : ''}`}>
        <div className="lg:flex hidden">
          <div>
            <Image src="/images/monito-logo.svg" width={115} height={40} alt="Logo Monito" />
          </div>
          <div className="ml-20">
            <ul className="flex gap-10 font-bold color-primary">
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
        </div>
        <div className="lg:flex hidden">
          <div className="w-[280px] mx-auto ml-20">
            <div className="relative">
              <input type="text" className="text-sm w-full bg-gray-100 text-gray-900 rounded-full py-3 pl-10 pr-4 focus:outline-none focus:border-blue-500" placeholder="Search something here!" />

              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Image src="/images/search-icon.svg" width={15} height={15} alt="Search Icon" />
              </div>
            </div>
          </div>      
          <button className="ml-5 bg-primary text-white rounded-full py-2 px-10 font-bold">Join the community</button>
          <div className="flex ml-20 cursor-pointer items-center">
            <Image src="/images/vietnam-flag.svg" width={20} height={20} alt="Flag" />
            <span className="ml-2">VND</span>
            <div className="ml-4"><Image src="/images/chevron-down.svg" width={9} height={9} alt="Chevron Down" /></div>
          </div>
        </div>
        <div>
          <Image src="/images/hamburger-icon.svg" width={30} height={30} alt="Hamburger" className="cursor-pointer lg:hidden" onClick={() => setIsHamburgerOpen(true)} />
        </div>        
        <div>
          <Image src="/images/monito-logo.svg" width={115} height={40} alt="Logo Monito"  className="cursor-pointer lg:hidden" />
        </div>
        <div>          
          <Image src="/images/search-icon.svg" width={25} height={25} alt="Search Icon" />
        </div>
      </div>
      {isHamburgerOpen && (
        <div className="fixed h-screen w-full bg-secondary lg:hidden z-[999] p-5 pr-[50px]">
          <div>
            <Image src="/images/close.png" width={30} height={30} alt="Close" onClick={() => setIsHamburgerOpen(false)} className="cursor-pointer" />
          </div>
          <div className="text-center text-lg mt-10">
            <div className="mb-4"><Link href="#">Home</Link></div>
            <div className="mb-4"><Link href="#">Category</Link></div>
            <div className="mb-4"><Link href="#">About</Link></div>
            <div className="mb-8"><Link href="#">Contact</Link></div>
            <div className="mb-4">
              <button className="ml-5 bg-primary w-full text-white rounded-full py-2 px-10 font-bold">Join the community</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
export default Navbar;