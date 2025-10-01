import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  rating: number;
  testimonial: string;
  image?: string;
  date: string;
}

const TestimonialCard = ({
  name,
  rating,
  testimonial,
  image,
  date,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        <div className="flex-shrink-0 mr-3">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-decent-blue text-white flex items-center justify-center">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-decent-blue">{name}</h4>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={`${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            } mr-1`}
          />
        ))}
      </div>
      
      <p className="text-gray-700">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;