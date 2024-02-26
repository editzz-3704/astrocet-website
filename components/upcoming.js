import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Upcoming = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-transparent z-10 relative">
     <style>
  {`
    .slick-slide {
      padding: 0 8px; /* Adjust the padding as needed */
    }

    .upcoming-card {
      max-width: 250px; /* Adjust the max-width as needed */
      height: 350px; /* Adjust the height as needed */
      background-color: #fff;
      margin: 0 8px 16px; /* Adjust the margin as needed */
      display: flex;
      flex-direction: column;
    }

    .upcoming-image {
      flex: 1;
      overflow: hidden;
    }

    .upcoming-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .upcoming-content {
      flex: 1;
      padding: 16px;
      display: flex;
      flex-direction: column;
    }

    @media (min-width: 768px) {
      .upcoming-card {
        max-width: 300px; /* Adjust as needed */
        height: 400px; /* Adjust as needed */
        margin: 0 12px 24px; /* Adjust the margin as needed */
      }
    }

    @media (min-width: 1024px) {
      .upcoming-card {
        max-width: 400px; /* Adjust as needed */
        height: 450px; /* Adjust as needed */
        margin: 0 16px 32px; /* Adjust the margin as needed */
      }
    }
  `}
</style>





      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Upcoming Events</h1>
      </div>

      <div className="container mx-auto px-4 mt-16">
        <Slider {...sliderSettings}>
          {/* Duplicate the following block for each event */}
          <div className="upcoming-card">
            <img className="w-full h-32 object-cover" src="/images/yip.png" alt="yip" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-0 text-center">Young Innovators Program</div>
              <p className="text-center mb-3">Date: 07/08/2023</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex justify-between mt-0 px-5 pb-3">
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">View Brochure</button>
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">Register</button>
            </div>
          </div>


          <div className="upcoming-card">
            <img className="w-full h-32 object-cover" src="/images/yip.png" alt="yip" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-0 text-center">Young Innovators Program</div>
              <p className="text-center mb-3">Date: 07/08/2023</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex justify-between mt-0 px-5 pb-3">
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">View Brochure</button>
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">Register</button>
            </div>
          </div>

          <div className="upcoming-card">
            <img className="w-full h-32 object-cover" src="/images/yip.png" alt="yip" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-0 text-center">Young Innovators Program</div>
              <p className="text-center mb-3">Date: 07/08/2023</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex justify-between mt-0 px-5 pb-3">
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">View Brochure</button>
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">Register</button>
            </div>
          </div>

          <div className="upcoming-card">
            <img className="w-full h-32 object-cover" src="/images/yip.png" alt="yip" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-0 text-center">Young Innovators Program</div>
              <p className="text-center mb-3">Date: 07/08/2023</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex justify-between mt-0 px-5 pb-3">
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">View Brochure</button>
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">Register</button>
            </div>
          </div>

          <div className="upcoming-card">
            <img className="w-full h-32 object-cover" src="/images/yip.png" alt="yip" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-0 text-center">Young Innovators Program</div>
              <p className="text-center mb-3">Date: 07/08/2023</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex justify-between mt-0 px-5 pb-3">
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">View Brochure</button>
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">Register</button>
            </div>
          </div>

          <div className="upcoming-card">
            <img className="w-full h-32 object-cover" src="/images/yip.png" alt="yip" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-0 text-center">Young Innovators Program</div>
              <p className="text-center mb-3">Date: 07/08/2023</p>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                perferendis eaque, exercitationem praesentium nihil.
              </p>
            </div>
            <div className="flex justify-between mt-0 px-5 pb-3">
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">View Brochure</button>
              <button className="bg-blue-500 rounded-md px-3 py-1 text-sm font-semibold text-white">Register</button>
            </div>
          </div>
          {/* End of duplicated block */}
          {/* Duplicate the above block for two more events */}
          {/* Make sure to update content and image paths for each event */}
        </Slider>
      </div>
    </section>
  );
};

export default Upcoming;
