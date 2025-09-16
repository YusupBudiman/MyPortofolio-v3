import Link from "next/link";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

// data
import { hero, socials } from "@/data/Hero";
import gradient from "../../public/images/gradient.png";

export default function Hero() {
  return (
    <div className="min-h-screen w-full flex">
      <Image
        src={gradient}
        alt="gradient"
        className="absolute to-0 right-0 z-[-1]"
      />
      <div className="absolute top-[10%] left-[5%] max-w-[40rem] flex flex-col justify-center ">
        {/* Link Socials */}
        <div className="flex mb-3">
          {socials.map((item, index) => (
            <Link
              key={index}
              href={item.media}
              target="_blank"
              className="mx-2 text-blue-50 hover:text-gray-800 text-4xl"
            >
              {item.icon}
            </Link>
          ))}
        </div>

        {/* Hero Content */}
        <div className="">
          <h1 className="title text-6xl mb-8 flex flex-col">
            {hero.title.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </h1>
          <div className="tag-box mb-8">
            <h3 className="tag">{hero.subtitle}</h3>
          </div>
          <p className="text-xl tracking-tighter max-w-[35rem] text-gray-400">
            {hero.description}
          </p>
        </div>
      </div>
      <div className="w-full p-20">
        <Spline
          // scene="https://prod.spline.design/MZ8T1gDeFNiUTpdm/scene.splinecode"
          scene="https://prod.spline.design/2Pjo76tSvSPPIPev/scene.splinecode"
          className="absolute top-0 right-0 w-[40%] h-[40%]"
        />
      </div>
    </div>
  );
}
