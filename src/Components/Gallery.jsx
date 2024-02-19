// Slick slider files
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Gallery = () => {

  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <IoIosArrowForward />,
    prevArrow: <IoIosArrowBack />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <section className="bg-[#ffffff] mt-[100px]">
      <h2 className="text-[24px] leading-[39px] font-[800] text[#252525] py-[50px] text-center text-[#252525] lg:text-[30px]">Event Gallery</h2>


      {/* Slider */}
      <div className="pb-[80px]">
        <Slider {...settings}>
          <div className="bg-[#DADADA] w-[165px] h-[165px]"></div>
          <div className="bg-[#DADADA] w-[165px] h-[165px]"></div>
          <div className="bg-[#DADADA] w-[165px] h-[165px]"></div>
          <div className="bg-[#DADADA] w-[165px] h-[165px]"></div>
          <div className="bg-[#DADADA] w-[165px] h-[165px]"></div>
          <div className="bg-[#DADADA] w-[165px] h-[165px]"></div>
          <div className="bg-[#DADADA] w-[165px] h-[165px]"></div>
        </Slider>
      </div>
    </section>
  )
}

export default Gallery