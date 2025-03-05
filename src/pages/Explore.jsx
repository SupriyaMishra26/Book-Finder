import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function Explore() {
  const DataURL = "https://example-data.draftbit.com/books?_limit=10";
  const [data, setData] = useState([]);
  var settings = {
    dots: true,
    autoplay: true,
    pauseOnHover: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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

  useEffect(() => {
    fetch(DataURL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
 <h1 className="text-4xl text-center font-extrabold text-gray-800 mb-8 mt-12">
          Trending Books
        </h1>
      <Slider {...settings}>
        {data.map((e, i) => {
          const { title, image_url } = e;
          return (
            <article className="px-4">
              <img
                className="mx-auto mt-4 h-60"
                key={i}
                src={image_url}
                alt={title}
              />

              <h2 className="mt-4 text-center font-bold">{title}</h2>
            </article>
          );
        })}
      </Slider>
      <div className="mt-20"></div>
    </>
  );
}

export default Explore;
