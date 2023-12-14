import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const heroImages = [
  { imgUrl: "/hero-1.svg", alt: "smartwatch" },
  { imgUrl: "/hero-2.svg", alt: "bag" },
  { imgUrl: "/hero-3.svg", alt: "lamp" },
  { imgUrl: "/hero-4.svg", alt: "air fryer" },
  { imgUrl: "/hero-5.svg", alt: "chair" },
];

function HeroCarousel() {
  return (
    <div className="px-10 pt-20 pb-5 max-w-[35rem] w-full bg-whitesmoke rounded-[30px]  justify-self-end self-end lg:justify-self-center sm:px-0 ">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={2000}
        showArrows={false}
        showStatus={false}
        swipeable={false}
      >
        {heroImages.map((image) => {
          return (
            <img
              src={image.imgUrl}
              alt={image.alt}
              className="object-contain"
              key={image.alt}
            ></img>
          );
        })}
      </Carousel>
    </div>
  );
}

export default HeroCarousel;
