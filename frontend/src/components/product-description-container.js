import { BiShoppingBag } from "react-icons/bi";

const ProductDescriptionContainer = ({ product }) => {
  return (
    <section className="w-full text-[3rem] text-black font-inter flex flex-col gap-16 justify-center items-center lg:gap-10">
      <h1 className="m-0   text-inherit font-medium font-inherit inline-block w-[28.31rem] h-[3.44rem] self-start">
        Product description
      </h1>
      <p className="m-0 text-[1.5rem] text-justify h-full text-ellipsis w-full">
        {product.description}
      </p>
      <a
        className="cursor-pointer [border:none] py-5 px-7 flex items-center justify-center bg-black  rounded-41xl gap-2 hover:bg-opacity-70 no-underline mb-32 sm:mb-26"
        href={product.url}
      >
        <BiShoppingBag className="text-white text-[2rem]" />

        <span className="m-0 font-inter text-white text-[1.5rem] font-semibold ">
          Buy Now
        </span>
      </a>
    </section>
  );
};

export default ProductDescriptionContainer;
