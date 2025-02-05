"use client";
 
import ImageFallback from "@/layout/helpers/ImageFallback";
import { useEffect,  useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper/modules";
import { Container } from "@/layout/components/Container";

import 'swiper/css';
import 'swiper/css/pagination';

const PhotoSlider = ({title, collections }: { title: string, collections: any }) => {
  const [collectionsData, setCollectionsData] = useState([]);

  useEffect(() => {
    setCollectionsData(collections);
  }, [collections]);

  return (
    <Container className="mt-8">
      <div className="relative pt-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 font-n27regular">
        {title}
        </h1>
      </div>
      <div className="bg-gradient py-4 px-6 rounded-xl mt-5">
        <Swiper
          pagination={{
            clickable: true,
            bulletClass: "banner-pagination-bullet",
            bulletActiveClass: "banner-pagination-bullet-active",
          }}
          modules={[Pagination]}
          spaceBetween={50}
          breakpoints={{
            640: {
              slidesPerView: 2, 
            },
            768: {
              slidesPerView: 3, 
            },
            1024: {
              slidesPerView: 5, 
            },
          }}
        >
          {collectionsData?.map((item: any, index) => {
            const { description, image } = item;
            return (
              <SwiperSlide key={index}>
                <div className="col-12">
                  <ImageFallback
                    src={image}
                    alt={description}
                    width={507}
                    height={385}
                    className="mx-auto w-[194px] lg:w-[225px]"
                  />                
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container> 
  );
};

export default PhotoSlider;
