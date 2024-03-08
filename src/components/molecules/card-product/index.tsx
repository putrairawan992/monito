import Image from "next/image";

interface CardProductProps {
  isProduct?: boolean
}

const CardProduct = (props: CardProductProps) => {
  return (
    <div className="shadow-lg hover:shadow-2xl rounded-xl p-3 w-full cursor-pointer">
      <div>
        <Image src="https://picsum.photos/264/264" width={264} height={264} alt="Photo Product" className="rounded-xl" />
      </div>
      <div className="px-3">
        <div className="mt-4">
          <p className="font-bold font-svn-gilroy-bold">MO502 - Poodle Tiny Yellow</p>
        </div>
        <div className="lg:flex gap-4 text-sm mt-2">
          <div>
            <span>Gene: </span>
            <span className="font-bold">Male</span>
          </div>
          <div>
            <span>Age: </span>
            <span className="font-bold">02 Months</span>
          </div>
        </div>
        <div className="mt-2 mb-3">
          <p className="font-bold font-svn-gilroy-bold">6.900.000 VND</p>
        </div>
        {props?.isProduct && (
          <div className="bg-secondary rounded-lg p-2 px-4 text-sm font-bold flex">
            <Image src="/images/gift-icon.svg" width={15} height={15} alt="Gift" />
            <span className="ml-3">Free Toy & Free Shaker</span>
          </div>
        )}
      </div>
    </div>
  )
}
export default CardProduct;