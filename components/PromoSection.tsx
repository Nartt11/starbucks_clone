import Image from "next/image";
import Link from "next/link";

interface PromoSectionProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  reverse?: boolean;
}

export default function PromoSection({
  title,
  description,
  imageUrl,
  imageAlt,
  buttonText,
  buttonLink,
  reverse = false,
}: PromoSectionProps) {
  return (
    <div className="max-w-[1440px] mx-auto lg:px-10 my-8 w-full">
      <div
        className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} h-auto md:h-[600px] overflow-hidden`}
      >
        <div className="w-full md:w-1/2 h-[350px] md:h-full relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageAlt}
            className="w-full h-full object-cover object-center absolute inset-0"
            width={1080}
            height={600}
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center py-16 px-8 text-center bg-primary-dark text-white">
          <div className="max-w-md flex flex-col items-center">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-6 tracking-wide leading-tight">
              {title}
            </h2>
            <p className="text-lg md:text-xl lg:text-[22px] mb-8 leading-relaxed font-light">
              {description}
            </p>
            <Link
              href={buttonLink}
              className={`inline-block px-5 py-2 rounded-full font-semibold transition-colors duration-200 border border-white text-white hover:bg-white/10`}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
