import CardArticle from "@root/components/molecules/card-article";
import CardProduct from "@root/components/molecules/card-product";
import Image from "next/image";

const ArticleList = () => {
  return (
    <div className="relative mt-20">
      <div className="flex lg:items-center lg:flex-row flex-col w-full justify-between">
        <div>
          <div className="font-bold">You already know ?</div>
          <div className="font-svn-gilroy-bold text-xl text-primary">Useful pet knowledge</div>
        </div>
        <div className="lg:block hidden">
          <button className="border border-2 rounded-full border-primary text-primary items-center py-2 px-7 flex">
            View more
            <Image src="/images/chevron-down.svg" width={9} height={9} alt="Arrow" className="ml-4 -rotate-90 mt-1" /> 
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-10 justify-start mt-4">
        {Array.from({ length: 3 }, (_, index) => (
          <div key={index}>
            <CardArticle />
          </div>
        ))}
      </div>
      <div className="lg:hidden w-full">
        <div className="mt-4">
          <button className="border border-2 w-full justify-center rounded-full border-primary text-primary items-center py-2 px-7 flex order-last">
            View more
            <Image src="/images/chevron-down.svg" width={9} height={9} alt="Arrow" className="ml-4 -rotate-90 mt-1" /> 
          </button>
        </div>
      </div>
    </div>
  )
}
export default ArticleList;