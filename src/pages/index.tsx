import Banner from "@root/components/atoms/banner";
import Banner2 from "@root/components/atoms/banner2";
import Banner3 from "@root/components/atoms/banner3";
import Navbar from "@root/components/atoms/navbar";
import Footer from "@root/components/molecules/footer";
import ArticleList from "@root/components/organisms/article-list";
import PetCatalogue from "@root/components/organisms/pet-catalogue";
import ProductCatalogue from "@root/components/organisms/product-catalogue";
import SellerLists from "@root/components/organisms/seller-lists";

export default function Home() {
  return (
    <div className="font-svn-gilroy">
      <Navbar />
      <Banner />
      <div className="container lg:px-[132px] px-5">
        <PetCatalogue />
        <Banner2 />
        <ProductCatalogue isProduct />
        <SellerLists />
        <Banner3 />
        <ArticleList />
      </div>
      <Footer />
    </div>
  );
}
