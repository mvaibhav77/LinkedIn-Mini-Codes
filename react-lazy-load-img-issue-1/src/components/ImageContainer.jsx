import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { trackWindowScroll } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function ImageContainer({ image, scrollPosition }) {
  return (
    <LazyLoadImage
      alt="Image Alt"
      effect="blur"
      src={image}
      scrollPosition={scrollPosition}
      className="h-100 w-100"
    />
  );
}

export default trackWindowScroll(ImageContainer);
