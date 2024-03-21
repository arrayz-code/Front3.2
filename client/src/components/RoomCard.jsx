import React from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';

const imageSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
};

const reviewSliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3500,
};

const RoomCard = ({ roomName, roomDescription, roomImages, price, currency, exchangeRate, reviews, people }) => {
  const convertedPrice = (price * exchangeRate).toFixed(2);

  return (
    <motion.div className="rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Slider {...imageSliderSettings}>
        {roomImages.map((image, index) => (
          <img key={index} className="w-full h-48 object-cover" src={image} alt={`${roomName} image ${index + 1}`} />
        ))}
      </Slider>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-sky-600">{roomName}</h3>
        <p className="text-gray-800">{roomDescription}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-gray-700 text-sm">
            Precio: {currency} {currency === 'USD' ? price : convertedPrice}
          </span>
          <span className="text-gray-700 text-sm">
            Personas: {people}
          </span>
        </div>
        <Slider {...reviewSliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="p-4">
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-gray-600">- {review.user}</p>
              <p className="text-yellow-600">Rating: {review.rating}</p>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default RoomCard;
