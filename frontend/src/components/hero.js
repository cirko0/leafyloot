import { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import HeroCarousel from "./hero-carousel";
import axios from "../api/axios";
import notify from "../utils/notify";

const Hero = () => {
  const [url, setUrl] = useState("");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const isValidAmazonProductUrl = (url) => {
    try {
      const parsedUrl = new URL(url);
      const hostname = parsedUrl.hostname;

      if (
        hostname.includes("amazon.com") ||
        hostname.includes("amazon.") ||
        hostname.endsWith("amazon")
      ) {
        return true;
      }
    } catch (err) {
      return false;
    }
    return false;
  };

  const scrapeProduct = async () => {
    const isValidLink = isValidAmazonProductUrl(url);
    if (!isValidLink)
      return notify("Please provide a valid Amazon link.", "error");

    try {
      setIsLoading(true);

      return notify(
        "This feature doesn't work due to changes on amazon site.",
        "error"
      );

      // const res = await axios.post("products/scrape", {
      //   productUrl: url,
      // });

      // navigate(`/product/${res.data.newProduct._id}`);
    } catch (error) {
      notify(error.response.data.message, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="w-full h-full grid grid-cols-2 relative z-10 items-center justify-items-center  overflow-hidden mb-24 lg:grid-cols-1 lg:gap-y-20  ">
      <div className="flex flex-col items-start justify-start gap-[4rem] text-[4rem] font-inter text-black">
        <div className="overflow-hidden flex flex-col items-start justify-start gap-[2.25rem] ">
          <div>
            <div className="flex items-center gap-1 text-[1.2rem] text-mediumseagreen font-inter mb-3 ">
              <span>Smart Shoping Starts Here:</span>
              <BiRightArrowAlt className="text-[1.5rem]" />
            </div>
            <h1 className="m-0 text-inherit font-semibold font-inherit">
              <p className="m-0">
                <span>{`Unlock the Thrill of Savvy Shopping with `}</span>
                <span className="text-mediumseagreen">LeafyLoot</span>
              </p>
            </h1>
          </div>
          <div className="text-[2rem]">
            Discover the Future of Smart Shopping with LeafyLoot – Your Personal
            Price Tracker Companion. 🍃
          </div>
        </div>
        <div className="flex items-center justify-start gap-[1.25rem] w-full sm:flex-col">
          <input
            className="font-inter text-[1.5rem] bg-white w-full rounded-3xs shadow-[0px_0px_1px_rgba(0,_0,_0,_0.25)] box-border p-5 border-[1px] border-solid border-silver"
            placeholder="Enter product link..."
            type="text"
            onChange={(event) => {
              setUrl(event.target.value);
            }}
          />
          <button
            className={`cursor-pointer [border:none] p-5 bg-black rounded-[1rem] text-white  text-[1.5rem] font-inter sm:w-full disabled:bg-opacity-20 hover:bg-opacity-70 disabled:cursor-not-allowed`}
            onClick={scrapeProduct}
            disabled={url === ""}
          >
            {isLoading ? "Scraping..." : "Scrape"}
          </button>
        </div>
      </div>
      <HeroCarousel />

      <img
        id="arrow"
        className="absolute w-[20rem] z-20 bottom-[3rem] xl:right-[30rem] lg:hidden xxl:right-[25rem]"
        alt=""
        src="/arrow.png"
      />
    </section>
  );
};

export default Hero;
