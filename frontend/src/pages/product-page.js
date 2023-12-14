import NavBar from "../components/nav-bar";
import ProductInfo from "../components/product-info";
import ProductCard from "../components/product-card";
import ProductDescriptionContainer from "../components/product-description-container";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import toast, { Toaster } from "react-hot-toast";
import notify from "../utils/notify";
import TrendingContainer from "../components/trending-container";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      scrollTo(0, 0);
      try {
        const [productRes, similarRes] = await Promise.all([
          axios.get(`products/${id}`),
          axios.get(`products/similar-to/${id}`),
        ]);

        setProduct(productRes.data.product);
        setSimilarProducts(similarRes.data.similarProducts);
      } catch (error) {
        notify("Server error! Please try again later.", "error");
      }
    };

    toast.promise(
      fetchData(),
      {
        loading: "Loading...",
        success: <b>Product loaded successfully!</b>,
      },
      {
        style: {
          borderRadius: "10px",
          fontFamily: "Inter, sans-serif",
        },
      }
    );
  }, [id]);

  return product && similarProducts ? (
    <div className="bg-white w-full h-full overflow-hidden flex flex-col items-center justify-start py-[2rem] px-[5rem] box-border sm:px-5 sm:gap-0">
      <NavBar />
      <ProductInfo product={product} />
      <ProductDescriptionContainer product={product} />
      <TrendingContainer data={similarProducts} title={"Similar products"} />
      <Toaster />
    </div>
  ) : (
    <Toaster />
  );
};

export default ProductPage;
