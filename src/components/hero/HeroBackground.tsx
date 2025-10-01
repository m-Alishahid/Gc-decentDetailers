import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";

interface HeroBackgroundProps {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
}

const HeroBackground = ({ currentSlide, setCurrentSlide }: HeroBackgroundProps) => {
  const [isMounted, setIsMounted] = useState(false);

  // Fixed image URLs with high-quality, verified images
  const images = [
    "heroback1.png",
    "heroback2.png",
    "heroback3.png",
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSliderChange = (value: number[]) => {
    setCurrentSlide(value[0]);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-0">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />

      {/* Dynamic background with carousel */}
      <Carousel className="h-full w-full" setApi={(api) => {
        if (api) {
          api.on("select", () => {
            setCurrentSlide(api.selectedScrollSnap());
          });
          // When current slide changes from slider, programmatically change carousel
          api.scrollTo(currentSlide);
        }
      }}>
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full w-full">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={`/${image}`}
                  alt={`Premium car detailing service ${index + 1}`}
                  fill
                  className="object-cover transform scale-105 animate-slow-pan"
                  loading={index === 0 ? "eager" : "lazy"}
                  priority={index === 0}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-10 left-4 md:left-10 right-4 md:right-10 z-20">
        <Slider
          defaultValue={[0]}
          max={images.length - 1}
          step={1}
          value={[currentSlide]}
          onValueChange={handleSliderChange}
          className="w-full max-w-md mx-auto md:mx-0"
        />
      </div>
    </div>
  );
};

export default HeroBackground;