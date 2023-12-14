import { useState } from "react";
import {
  BiShareAlt,
  BiBookmark,
  BiHeart,
  BiStar,
  BiMessageDots,
} from "react-icons/bi";
import Modal from "./modal";

const ProductInfo = ({ product }) => {
  return (
    <section className="w-full h-full grid grid-cols-2 items-center justify-items-center overflow-hidden mb-32 gap-x-36 p-10 lg:grid-cols-1 lg:gap-y-20 sm:mb-26">
      <div className="w-full h-full flex justify-center items-center py-5 lg:h-[50rem] md:h-[40rem]">
        <img
          className="w-[25rem] rounded-2xl self-center justify-self-center px-24 h-full object-contain border-solid border-lightgray border-2 sm:px-5"
          alt=""
          src={product.image}
        />
      </div>
      <div className="font-inter flex flex-col w-full h-full gap-10">
        <div className="overflow-hidden flex gap-5 flex-col">
          <h1 className="m-0  text-black text-[2rem] font-medium font-inter inline-block ">
            {product.title}
          </h1>
          <div className="flex text-[1.5rem] text-slategray gap-4 items-center justify-between">
            <a
              className="m-0 cursor-pointer no-underline text-slategray"
              href={product.url}
            >
              Visit product
            </a>

            <div className="flex text-[1.5rem] gap-4 cursor-pointer">
              <div className="flex rounded-md bg-lavenderblush py-1 px-3 text-lightcoral justify-center items-center gap-2">
                <BiHeart />
                <span>123</span>
              </div>

              <BiBookmark className="text-black rounded-8xs bg-[#edf0f8] p-2 cursor-pointer" />
              <BiShareAlt className="text-black rounded-8xs bg-[#edf0f8] p-2 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="box-border w-full border-[1px] border-solid border-lightgray" />
        <div className="flex gap-10 text-[1.25rem] sm:flex-col">
          <div className="flex flex-col items-start gap-4">
            <p className=" m-0 text-[2rem] font-medium">
              {product.currency}
              {product.currentPrice}
            </p>
            <span className="  text-[1.5rem] [text-decoration:line-through] text-slategray ">
              {product.currency}
              {product.originalPrice}
            </span>
          </div>
          <div className="flex items-start flex-col gap-4 mb-0">
            <div className="flex gap-4">
              <div className="flex items-center justify-center px-4 py-2 rounded-full bg-linen gap-1 text-peru">
                <BiStar />
                <span className=" top-[0.31rem] left-[2.63rem] inline-block w-[0.81rem] h-[1.38rem]">
                  0
                </span>
              </div>
              <div className="flex items-center justify-center gap-1 rounded-full bg-aliceblue px-4 py-2">
                <BiMessageDots />
                <span className="inline-block">0 Reviews</span>
              </div>
            </div>
            <div className="  text-slategray ">
              <span className="font-semibold font-inter">93%</span>
              <span> of buyers have recommended this.</span>
            </div>
          </div>
        </div>

        <div className="box-border w-full border-[1px] border-solid border-lightgray" />

        <div className="text-[1.5rem] text-slategray">
          <div className="grid grid-cols-2 grid-rows-2 gap-8 mb-10 sm:grid-cols-1">
            <div className="flex flex-col rounded-mini bg-whitesmoke box-border border-l-[3px] border-solid border-lightgray py-5 px-9 gap-2">
              <p className="m-0 inline-block">Current Price</p>
              <p className=" m-0 font-medium text-black inline-block">
                💰 {product.currency}
                {product.currentPrice}
              </p>
            </div>
            <div className="flex flex-col rounded-mini bg-whitesmoke box-border border-l-[3px] border-solid border-lightgray py-5 px-9 gap-2">
              <p className="m-0 inline-block">Average Price</p>
              <p className=" m-0 font-medium text-black inline-block">
                📊 {product.currency}
                {product.averagePrice}
              </p>
            </div>
            <div className="flex flex-col rounded-mini bg-whitesmoke box-border border-l-[3px] border-solid border-lightgray py-5 px-9 gap-2">
              <p className="m-0 inline-block">Highest Price</p>
              <p className=" m-0 font-medium text-black inline-block">
                ⬆️ ️{product.currency}
                {product.highestPrice}
              </p>
            </div>
            <div className="flex flex-col rounded-mini bg-whitesmoke box-border border-l-[3px] border-solid border-lightgray py-5 px-9 gap-2">
              <p className="m-0 inline-block">Lowest Price</p>
              <p className=" m-0 font-medium text-black inline-block">
                ⬇️ ️{product.currency}
                {product.lowestPrice}
              </p>
            </div>
          </div>
          <Modal productId={product._id} />
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
