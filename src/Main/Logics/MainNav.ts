import { useState, useEffect, useCallback } from "react";

import bg_img1 from "../../Components/img/hero-carousel/1.jpg";
import bg_img2 from "../../Components/img/hero-carousel/2.jpg";
import bg_img3 from "../../Components/img/hero-carousel/3.jpg";
import bg_img4 from "../../Components/img/hero-carousel/4.jpg";
import bg_img5 from "../../Components/img/hero-carousel/5.jpg";

export interface CarouselItem {
  backgroundImage: string;
  title: string;
  description: string;
}

export const useCarousel = (): {
  activeIndex: number;
  carouselItems: CarouselItem[];
  goToPrevious: () => void;
  goToNext: () => void;
} => {
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems: CarouselItem[] = [
    {
      backgroundImage: bg_img1,
      title: "We are professional",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      backgroundImage: bg_img2,
      title: "At vero eos et accusamus",
      description:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut.",
    },
    {
      backgroundImage: bg_img3,
      title: "Temporibus autem quibusdam",
      description:
        "Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt omnis iste natus error sit voluptatem accusantium.",
    },
    {
      backgroundImage: bg_img4,
      title: "Nam libero tempore",
      description:
        "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum.",
    },
    {
      backgroundImage: bg_img5,
      title: "Magnam aliquam quaerat",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const goToPrevious = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  }, [carouselItems.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  }, [carouselItems.length]);

  useEffect(() => {
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [goToNext]);

  return { activeIndex, carouselItems, goToPrevious, goToNext };
};
