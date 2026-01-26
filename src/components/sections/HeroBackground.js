"use client";

import Mask from "../hero/parts/HeroMask";

export default function HeroBackground() {
  return (
    <>
      {/* ===== GLOW ===== */}
      <div
        className="
          flex z-[1] rounded-tl-full absolute right-0 bottom-0
          bg-gradient-to-t from-[hsl(43,76%,84%)] to-[hsla(43,76%,84%,0.8)]
          xl:w-[750px] xl:h-[140px]
          2xl:w-[1200px] 2xl:h-[280px]
          xl:blur-[30px] 2xl:blur-[60px]
        "
      />

      {/* ===== MAIN ORB ===== */}
      <div
        className="
          flex absolute lg:right-[35%] 2xl:right-[32%] lg:bottom-[15%]
          bg-gradient-to-b from-[rgb(150,171,125)] to-[rgb(241,240,204)]
          lg:w-[300px] lg:h-[300px]
          2xl:w-[600px] 2xl:h-[600px]
          rounded-full
          lg:shadow-[0_0_0_20px_rgba(241,240,204,0.2),0_0_0_80px_rgba(241,240,204,0.1)]
          2xl:shadow-[0_0_0_40px_rgba(241,240,204,0.2),0_0_0_120px_rgba(241,240,204,0.1)]
        "
      >
        <div
          className="
            flex absolute inset-0 m-auto rounded-full
            lg:w-[280px] lg:h-[280px]
            2xl:w-[580px] 2xl:h-[580px]
            bg-gradient-to-b from-[rgb(150,171,125)] to-[rgb(241,240,204)]
            xl:border-l-6 xl:border-b-6 xl:border-r-3
            2xl:border-l-12 2xl:border-b-12 2xl:border-r-6
            border-white/30
          "
        />
      </div>

      {/* ===== CHARACTER ===== */}
      <div
        className="
          absolute z-10 bg-[url('/images/myimg7.png')] bg-cover
          bottom-[-5%] right-[35%]
          xl:h-[340px] xl:w-[280px]
          2xl:h-[600px] 2xl:w-[480px]
        "
      />

      {/* ===== SKY ===== */}
      <Mask className="mask-[url('/images/bird1.png')] absolute xl:w-[120px] xl:h-[120px] 2xl:w-[200px] 2xl:h-[200px] xl:top-[20%] xl:left-[32%] 2xl:top-[15%] 2xl:left-[26%] rotate-[341deg] mask-center mask-no-repeat [mask-size:100%] z-[5] bg-gradient-to-tr from-[hsla(137,18%,56%,0.3)] via-[hsla(137,18%,56%,1)] to-[hsla(137,18%,56%,0.3)]" />

      <Mask className="mask-[url('/images/bird1.png')] absolute xl:w-[120px] xl:h-[120px] 2xl:w-[200px] 2xl:h-[200px] xl:top-[20%] xl:right-[25%] 2xl:top-[15%] 2xl:right-[22%] rotate-[93deg] mask-center mask-no-repeat [mask-size:100%] z-[99] bg-gradient-to-tr from-[hsla(137,18%,56%,0.3)] via-[hsla(137,18%,56%,1)] to-[hsla(137,18%,56%,0.3)]" />

      {/* ===== ABSTRACT / DOT ===== */}
      <Mask className="mask-[url('/images/abstrak1.png')] absolute w-[400px] h-[400px] top-0 left-0 mask-center mask-no-repeat [mask-size:100%] z-[5] bg-gradient-to-b from-[hsl(167,47%,22%)] via-[hsl(141,21%,56%)] to-[hsl(105,25%,70%)]" />

      <Mask className="mask-[url('/images/dot1.png')] absolute w-[500px] h-[500px] top-[-5%] left-[-5%] rotate-[40deg] mask-center mask-no-repeat [mask-size:100%] z-[1] bg-gradient-to-l from-[hsla(105,25%,70%,0.8)] via-[hsla(141,21%,56%,0.5)] to-[transparent]" />

      <Mask className="mask-[url('/images/dot2.png')] absolute w-[500px] h-[500px] top-[-8%] left-[0%] rotate-[300deg] mask-center mask-no-repeat [mask-size:100%] z-[1] bg-gradient-to-l from-[hsla(167,47%,22%,0.5)] via-[hsla(141,21%,56%,0.3)] to-[hsla(37,53%,65%,0.8)]" />

      <Mask className="mask-[url('/images/dot2.png')] absolute w-[500px] h-[500px] bottom-[-4%] right-[0%] rotate-[145deg] mask-center mask-no-repeat [mask-size:100%] z-[1] bg-gradient-to-l from-[hsla(50,81%,94%,1)] via-[hsla(50,81%,94%,0.8)] to-[hsla(105,25%,70%,0.5)]" />

      <Mask className="z-[2] mask-[url('/images/abstrak4.png')] absolute w-[600px] h-[600px] bottom-[-10%] right-[-7%] scale-x-[-1] rotate-[300deg] mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-r from-[hsla(103,17%,59%,0.5)] to-[hsl(47,82%,89%)]" />

      <Mask className="z-[2] mask-[url('/images/abstrak4.png')] absolute w-[600px] h-[600px] bottom-[-30%] right-[-13%] scale-y-[-1] rotate-[300deg] mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-br from-[hsla(103,17%,59%,0.5)] to-[hsl(47,82%,89%)]" />

      {/* ===== ROCK & GROUND ===== */}
      <Mask className="mask-[url('/images/rock2.png')] absolute w-[400px] h-[400px] bottom-[-14%] left-[-2%] mask-center mask-no-repeat [mask-size:100%] z-[2] bg-[hsl(49,89%,85%)]" />

      <Mask className="mask-[url('/images/rock1.png')] absolute w-[600px] h-[600px] bottom-[-10%] left-[5%] mask-center mask-no-repeat [mask-size:100%] z-[1] bg-gradient-to-r from-[hsl(51,63%,81%)] via-[hsla(51,63%,81%,0.2)] to-[hsla(51,63%,81%,0)]" />

      <div className="absolute flex bottom-[30%] right-[-8%]">
        <Mask className="mask-[url('/images/rock1.png')] absolute top-[-30%] right-[15%] w-[200px] h-[200px] mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-b from-[hsl(167,54%,15%)] via-[hsla(167,54%,15%,0.3)] to-[hsla(170,48%,20%,1)]" />

        <Mask className="mask-[url('/images/rock3.png')] absolute left-[-15%] bottom-0 w-[300px] h-[250px] mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-b from-[hsla(166,37%,33%,0.5)] to-[hsla(137,17%,58%)]" />

        <Mask className="mask-[url('/images/rock1.png')] w-[500px] h-[500px] mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-b from-[hsla(166,37%,33%)] via-[hsla(166,37%,33%,0.3)] to-[hsla(166,37%,33%,0)]" />
      </div>

      <Mask className="mask-[url('/images/rock3.png')] absolute w-[200px] h-[200px] bottom-[-10%] left-[20%] mask-center mask-no-repeat [mask-size:100%] z-[6] bg-[hsl(49,89%,85%)]" />

      <Mask className="mask-[url('/images/rock1.png')] absolute w-[150px] h-[150px] bottom-[-3%] left-[24%] mask-center mask-no-repeat [mask-size:100%] z-[5] bg-[hsl(49,71%,81%)]" />

      <Mask className="z-[1] mask-[url('/images/rock1.png')] absolute w-[400px] h-[300px] bottom-[1%] right-[16%] mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-b from-[hsl(49,71%,81%,0.3)] via-[hsla(49,71%,81%,0.2)] to-[transparent]" />

      {/* ===== PAGAR & LANTERN ===== */}
      <Mask className="mask-[url('/images/pagar1.png')] absolute w-[300px] h-[300px] bottom-[-14%] left-0 mask-center mask-no-repeat [mask-size:100%] z-[5] bg-[hsl(48,69%,82%)]" />

      <Mask className="mask-[url('/images/pagar1.png')] absolute w-[300px] h-[300px] bottom-[-11%] left-[10%] mask-center mask-no-repeat [mask-size:100%] z-[4] bg-[hsl(52,69%,84%)]" />

      <div className="absolute bottom-0 left-[10%] w-[300px] h-[50px] bg-[hsl(52,69%,84%)] z-[4]" />

      <Mask className="mask-[url('/images/cina1.png')] absolute w-[200px] h-[200px] bottom-[5%] left-[10%] mask-center mask-no-repeat [mask-size:100%] z-[3] bg-[hsl(58,46%,75%)]" />

      <Mask className="mask-[url('/images/gate1.png')] absolute w-[120px] h-[120px] bottom-[0%] left-[6%] mask-center mask-no-repeat [mask-size:100%] z-[3] bg-[hsl(58,46%,75%)]" />

      <Mask className="mask-[url('/images/lantern2.png')] absolute w-[60px] h-[200px] bottom-[-5%] left-[1%] mask-center mask-no-repeat [mask-size:100%] z-[3] bg-[hsl(58,46%,75%)]" />

      <Mask className="mask-[url('/images/lantern2.png')] absolute w-[60px] h-[200px] bottom-[-5%] left-[18%] mask-center mask-no-repeat [mask-size:100%] z-[5] bg-[hsl(58,46%,75%)]" />

      {/* ===== LEFT CIRCLE ===== */}
      <div className="absolute z-10 left-[5%] top-[5%] w-[750px] h-[750px] rounded-full border-l-8 rotate-[330deg]" />
    </>
  );
}
