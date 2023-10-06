import { useState, useEffect } from "react";
import ImageReal from "./assets/img_real.jpg";
import AltImage from "./assets/img_alt.jpg";

function LazyLoadedImage({ lowQualitySrc, highQualitySrc }) {
  const [imageSrc, setImageSrc] = useState(lowQualitySrc);

  useEffect(() => {
    const highQualityImage = new Image();
    highQualityImage.src = highQualitySrc;
    highQualityImage.onload = () => {
      setImageSrc(highQualitySrc);
    };
  }, [highQualitySrc]);

  return (
    <img
      src={imageSrc}
      alt="sample"
      style={{ height: "400px", width: "600px" }}
    />
  );
}

function App() {
  return (
    <div>
      <LazyLoadedImage lowQualitySrc={AltImage} highQualitySrc={ImageReal} />
    </div>
  );
}

export default App;
