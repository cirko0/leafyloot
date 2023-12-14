import ProductCard from "./product-card";

const TrendingContainer = ({ data, title }) => {
  return (
    <section className="flex flex-col text-[1.2rem] w-full text-black font-inter mb-10">
      <h1 className="text-[3rem] font-medium font-inter m-0 mb-[3rem]">
        {title}
      </h1>
      <div className="grid grid-cols-5 gap-y-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

export default TrendingContainer;
