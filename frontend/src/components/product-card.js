import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col items-center self-center justify-self-center justify-between mb-0 gap-1 w-72 cursor-pointer"
      onClick={() => {
        navigate(`/product/${product._id}`);
      }}
    >
      <img
        className="w-72 h-60 overflow-hidden  object-contain"
        alt=""
        src={product.image}
      />

      <p className="text-[1.6rem] font-medium m-0 mt-5 text-secondary truncate w-full">
        {product.title}
      </p>

      <div className="flex justify-between w-full mt-1">
        <p className=" text-slategray inline-block m-0">Category</p>

        <p className=" font-medium inline-block m-0">
          {product.currency}
          {product.currentPrice}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
