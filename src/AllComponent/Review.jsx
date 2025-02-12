// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
// Import required modules
import { Scrollbar } from 'swiper/modules';

export default function Review() {
  const reviews = [
    {
      name: 'John Doe',
      review: 'Excellent service! Highly recommended.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      review: 'Very user-friendly platform and great support.',
      rating: 4,
    },
    {
      name: 'Sam Wilson',
      review: 'Quick and efficient, will use again.',
      rating: 5,
    },
    {
      name: 'Lisa Brown',
      review: 'Affordable and reliable services.',
      rating: 4,
    },
    {
      name: 'Mark Taylor',
      review: 'Had a good experience overall.',
      rating: 3,
    },
  ];

  return (
    <div className="mb-20 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-2">{review.name}</h3>
            <p className="text-gray-700 mb-2">"{review.review}"</p>
            <div className="flex">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="text-gray-300">★</span>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
