import Image from "next/image";

const CardArticle = () => {
  return (
    <div className="shadow-lg hover:shadow-2xl rounded-xl p-3 w-full cursor-pointer">
      <div>
        <Image src="https://picsum.photos/350/243" width={400} height={243} alt="Photo Article" className="rounded-xl" />
      </div>
      <div className="px-3">
        <div className="mt-4">
          <p className="font-bold font-svn-gilroy-bold">What is a Pomeranian? How to Identify Pomeranian Dogs</p>
        </div>
        <div className="lg:flex gap-4 text-sm my-2">
          <p>
            The Pomeranian, also known as the Pomeranian (Pom dog), 
            is always in the top of the cutest pets. Not only that, the small, 
            lovely, smart, friendly, and skillful circus dog breed.
          </p>
        </div>
      </div>
    </div>
  )
}
export default CardArticle;