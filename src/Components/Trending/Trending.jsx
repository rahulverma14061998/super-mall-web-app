import { useContext } from "react";
import { Store } from "../../Store/Store";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trending.css";

export default function Trending() {
  let { productData } = useContext(Store);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 mt-16 bg-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Trending Products</h2>
        <p className="text-lg text-gray-500">
          Check out the latest products in our store!
        </p>
      </div>
      <Slider {...settings}>
        {productData.map((product) => (
          <div key={product.id} className="slick-item">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl duration-300">
              <div className="h-56  flex justify-center items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-44 w-44 rounded-full shadow-lg border-4 border-white"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-semibold mb-2">{product.title}</h5>
                <p className="text-lg text-gray-700 font-bold mb-4">
                  ${product.price}
                </p>
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-lg px-6 py-2 rounded-lg transition-all duration-300">
                  Read More...
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
