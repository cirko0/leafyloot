import NavBar from "../components/nav-bar";
import Hero from "../components/hero";
import TrendingContainer from "../components/trending-container";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import axios from "../api/axios";
import notify from "../utils/notify";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const res = await axios.get("products");
      setProducts(res.data.products);
    } catch (err) {
      notify("Server error! Please try again later.", "error");
    }
  };

  useEffect(() => {
    toast.promise(
      getAllProducts(),
      {
        loading: "Loading...",
        success: <b>Trending products loaded successfully!</b>,
      },
      {
        style: {
          borderRadius: "10px",
          fontFamily: "Inter, sans-serif",
        },
      }
    );
  }, []);

  return (
    <>
      {products ? (
        <>
          <div className=" bg-white w-full h-full overflow-hidden flex flex-col items-center justify-start py-[2rem] px-[5rem] box-border gap-5 lg:gap-20 sm:px-5">
            <NavBar />
            <Hero />
            <TrendingContainer data={products} title={"Trending"} />
          </div>
          <Toaster />
        </>
      ) : (
        <Toaster />
      )}
    </>
  );
};

export default Home;
