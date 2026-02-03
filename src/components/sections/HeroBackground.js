"use client";

import Mask from "../hero/parts/HeroMask";

export default function HeroBackground() {
  return (
    <div
      className="absolute w-full h-full bg-gradient-to-b 
    from-[#fbf7cb] to-[#07312c]
     lg:from-[#07312c] lg:via-[#418170] lg:to-[#fbf7cb]"
    >
      {/* ===== GLOW ===== */}
      <div
        className={`
           z-1 rounded-tl-full absolute right-0 bottom-0 blur-[80px]
          bg-gradient-to-t from-[hsl(43,76%,84%)] to-[hsla(43,76%,84%,0.8)]
          
          hidden 

          lg:flex lg:w-[550px] lg:h-[180px]

          xl:w-[750px] 
          
          2xl:w-[1200px] 2xl:h-[280px] 
          `}
      />

      {/* mobile */}
      <div
        className="z-5 lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[220vw] h-[80vh] rounded-b-full bg-[hsl(60,42%,95%)] flex justify-center items-start
       border-x-32 border-b-1 border-[hsl(65,45%,84%)] overflow-hidden"
      >
        <Mask
          className="
          z-2 absolute bottom-0 w-full h-20 bg-gradient-to-bl from-[hsl(144,16%,76%)] via-[hsl(82,25%,83%)] to-[hsl(87,15%,88%)]
          [mask-image:url('/images/iconbtn1.png')]
          mask-repeat mask-center [mask-size:30%]
  "
        />

        <div
          className="z-5 relative w-[140vw] h-full rounded-b-full bg-gradient-to-b from-[#07312c] via-[rgba(65,129,112)] to-[#fbf7cb]
        border-x-48 border-b-1 border-[hsl(65,45%,84%)] overflow-hidden"
        >
          {/* ===== MAIN ORB ===== */}
          <div
            className={`
           z-5 flex absolute bg-gradient-to-b from-[rgb(150,171,125)] to-[rgb(241,240,204)] rounded-full
          
            w-[340px] h-[340px] left-[50%] -translate-x-1/2 bottom-[1%] 
            shadow-[0_0_0_20px_rgba(241,240,204,0.2),0_0_0_60px_rgba(241,240,204,0.1)]
          `}
          >
            {/* ===== Bird Left ===== */}
            <Mask
              className={`
            mask-[url('/images/bird1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[5] bg-gradient-to-tr from-[hsla(137,18%,56%,0.3)] via-[hsla(137,18%,56%,1)] to-[hsla(137,18%,56%,0.3)] 
            rotate-[352deg] w-[120px] h-[120px] top-[-16%] left-[-12%] 

      `}
            />
            {/* Birt Right */}
            <Mask
              className={`
            mask-[url('/images/bird1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[99] bg-gradient-to-tr from-[hsla(137,18%,56%,0.3)] via-[hsla(137,18%,56%,1)] to-[hsla(137,18%,56%,0.3)] 
            rotate-[80deg] w-[120px] h-[120px] top-[-16%] right-[-12%] 
            `}
            />

            {/* Inner Orb */}
            <div
              className={`
               flex absolute inset-0 m-auto rounded-full border-white/30 bg-gradient-to-b from-[rgb(150,171,125)] to-[rgb(241,240,204)]
            
               w-[320px] h-[320px] border-l-6 border-b-6 border-r-3
            `}
            />
          </div>

          {/* ===== CHARACTER ===== */}
          <div
            className={`
          absolute z-10 bg-[url('/images/myimg7.png')] bg-cover  left-[50%] -translate-x-1/2
          
          h-[340px] w-[280px] bottom-[-6%]
          `}
          />
        </div>
      </div>

      {/* dekstop */}
      {/* ===== MAIN ORB ===== */}
      <div
        className={`hidden
           z-5 lg:flex absolute bg-gradient-to-b from-[rgb(150,171,125)] to-[rgb(241,240,204)] rounded-full
          
            w-[200px] h-[200px] left-[50%] -translate-x-1/2 bottom-[30%] 
            shadow-[0_0_0_30px_rgba(241,240,204,0.2),0_0_0_90px_rgba(241,240,204,0.1)]

            lg:w-[300px] lg:h-[300px] lg:bottom-[15%] 
            lg:shadow-[0_0_0_30px_rgba(241,240,204,0.2),0_0_0_90px_rgba(241,240,204,0.1)]
          
            2xl:w-[600px] 2xl:h-[600px]  
            2xl:shadow-[0_0_0_40px_rgba(241,240,204,0.2),0_0_0_120px_rgba(241,240,204,0.1)]
          `}
      >
        {/* ===== Bird Left ===== */}
        <Mask
          className={`
            mask-[url('/images/bird1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[5] bg-gradient-to-tr from-[hsla(137,18%,56%,0.3)] via-[hsla(137,18%,56%,1)] to-[hsla(137,18%,56%,0.3)] rotate-[341deg]
      
            lg:w-[120px] lg:h-[120px] lg:top-[-20%] lg:left-[-45%] 
      
            2xl:w-[200px] 2xl:h-[200px] 2xl:top-[-12%] 2xl:left-[-30%] 
      `}
        />
        {/* Birt Right */}
        <Mask
          className={`
            mask-[url('/images/bird1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[99] bg-gradient-to-tr from-[hsla(137,18%,56%,0.3)] via-[hsla(137,18%,56%,1)] to-[hsla(137,18%,56%,0.3)] rotate-[93deg]
      
            lg:w-[120px] lg:h-[120px] lg:top-[-20%] lg:right-[-45%]  
      
            2xl:w-[200px] 2xl:h-[200px] 2xl:top-[-12%] 2xl:right-[-30%]
            `}
        />

        {/* Inner Orb */}
        <div
          className={`
               flex absolute inset-0 m-auto rounded-full border-white/30 bg-gradient-to-b from-[rgb(150,171,125)] to-[rgb(241,240,204)]
            
               lg:w-[280px] lg:h-[280px] lg:border-l-6 lg:border-b-6 lg:border-r-3
            
               2xl:w-[580px] 2xl:h-[580px] 2xl:border-l-12 2xl:border-b-12 2xl:border-r-6
            `}
        />
      </div>

      {/* ===== CHARACTER ===== */}
      <div
        className={`
          absolute z-10 bg-[url('/images/myimg7.png')] bg-cover  left-[50%] -translate-x-1/2
          
          lg:h-[340px] lg:w-[280px] lg:bottom-[-5%]

          2xl:h-[580px] 2xl:w-[480px]
          `}
      />

      {/* ===== ABSTRACT / DOT ===== */}
      <Mask
        className={`
          mask-[url('/images/abstrak1.png')] absolute top-0 left-0 mask-center mask-no-repeat [mask-size:100%] z-[5] bg-gradient-to-b from-[hsl(167,47%,22%)] via-[hsl(141,21%,56%)] to-[hsl(105,25%,70%)]
      
          lg:w-[200px] lg:h-[200px]

          2xl:w-[400px] 2xl:h-[400px]
      `}
      />

      <Mask
        className={`
          mask-[url('/images/dot1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[1] bg-gradient-to-l from-[hsla(105,25%,70%,0.8)] via-[hsla(141,21%,56%,0.5)] to-[transparent] rotate-[40deg]
      
          lg:w-[250px] lg:h-[250px] lg:top-[-6%] lg:left-[-8%]

          2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-5%] 2xl:left-[-5%]
      `}
      />

      <Mask
        className={`
          mask-[url('/images/dot2.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[1] bg-gradient-to-l from-[hsla(167,47%,22%,0.5)] via-[hsla(141,21%,56%,0.3)] to-[hsla(37,53%,65%,0.8)] rotate-[300deg]
      
          lg:w-[350px] lg:h-[350px] lg:top-[-12%] lg:left-[-4%]

          2xl:w-[500px] 2xl:h-[500px] 2xl:top-[-8%] 2xl:left-[0%]
      `}
      />

      <Mask
        className={`
          mask-[url('/images/dot2.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[1] bg-gradient-to-l from-[hsla(50,81%,94%,1)] via-[hsla(50,81%,94%,0.8)] to-[hsla(105,25%,70%,0.5)]
      
          lg:w-[350px] lg:h-[350px] lg:bottom-[-11%] lg:right-[-2%] lg:rotate-[140deg]
      
          2xl:w-[500px] 2xl:h-[500px] 2xl:bottom-[-4%] 2xl:right-[0%] 2xl:rotate-[145deg]
          `}
      />

      <Mask
        className={`
          z-[2] mask-[url('/images/abstrak4.png')] absolute mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-r from-[hsla(103,17%,59%,0.5)] to-[hsl(47,82%,89%)]
          bottom-[-10%] right-[-7%] scale-x-[-1] rotate-[300deg]
      
          lg:w-[350px] lg:h-[350px]

          2xl:w-[600px] 2xl:h-[600px]
      `}
      />

      <Mask
        className={`
          z-[2] mask-[url('/images/abstrak4.png')]  mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-br from-[hsla(103,17%,59%,0.5)] to-[hsl(47,82%,89%)] absolute 
          bottom-[-30%] right-[-13%] scale-y-[-1] rotate-[300deg]
        
          lg:w-[350px] lg:h-[350px]

          2xl:w-[600px] 2xl:h-[600px]
        `}
      />

      {/* ===== ROCK & GROUND ===== */}
      <Mask
        className={`
          mask-[url('/images/rock2.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[2] bg-[hsl(49,89%,85%)]
          bottom-[-14%] left-[-2%]
      
          lg:w-[260px] lg:h-[260px]

          xl:w-[300px] xl:h-[300px]

          2xl:w-[400px] 2xl:h-[400px]
      `}
      />

      <Mask
        className={`
          mask-[url('/images/rock1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[1] bg-gradient-to-r from-[hsl(51,63%,81%)] via-[hsla(51,63%,81%,0.2)] to-[hsla(51,63%,81%,0)]
          bottom-[-10%] left-[5%]
      
          lg:w-[300px] lg:h-[300px]

          xl:w-[400px] xl:h-[400px]
          
          2xl:w-[600px] 2xl:h-[600px]
          `}
      />

      <div
        className={`
        absolute flex bottom-[30%] 
        
        lg:right-[-4%]

        2xl:right-[-8%]  
        `}
      >
        <Mask
          className={`
            mask-[url('/images/rock1.png')] absolute mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-b from-[hsl(167,54%,15%)] via-[hsla(167,54%,15%,0.3)] to-[hsla(170,48%,20%,0)]
        
            lg:w-[80px] lg:h-[80px]  lg:top-[-140%] lg:right-[0%]

            xl:w-[100px] xl:h-[100px]  xl:top-[-100%] xl:right-[0%]

            2xl:w-[200px] 2xl:h-[200px] 2xl:top-[-30%] 2xl:right-[15%]
        `}
        />

        <Mask
          className={`
            mask-[url('/images/rock3.png')] absolute mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-b from-[hsl(49,71%,81%,0.3)] via-[hsla(49,71%,81%,0.1)] to-[transparent]
            
            lg:w-[150px] lg:h-[120px] lg:bottom-[-30%]

            xl:w-[150px] xl:h-[150px] 

            2xl:w-[300px] 2xl:h-[250px] left-[-15%] 2xl:bottom-[-10%]
        `}
        />

        <Mask
          className={`
            mask-[url('/images/rock1.png')]  mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-b from-[hsla(166,37%,33%)] via-[hsla(166,37%,33%,0.3)] to-[hsla(166,37%,33%,0)]
        
            lg:w-[220px] lg:h-[160px]

            xl:w-[250px] xl:h-[200px]

            2xl:w-[500px] 2xl:h-[500px]
        `}
        />
      </div>

      <Mask
        className={`
          mask-[url('/images/rock3.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[6] bg-[hsl(49,89%,85%)]
          bottom-[-10%] left-[20%] 

          lg:w-[125px] lg:h-[125px]

          2xl:w-[200px] 2xl:h-[200px]
       `}
      />

      <Mask
        className={`
          mask-[url('/images/rock1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[5] bg-[hsl(49,71%,81%)]
          bottom-[-3%] left-[24%]

          lg:w-[100px] lg:h-[100px]

          2xl:w-[150px] 2xl:h-[150px] 
      `}
      />

      <Mask
        className={`
          z-[1] mask-[url('/images/rock1.png')] absolute mask-center mask-no-repeat [mask-size:100%] bg-gradient-to-b from-[hsl(49,71%,81%,0.3)] via-[hsla(49,71%,81%,0.2)] to-[transparent]
       
          lg:w-[300px] lg:h-[200px] lg:bottom-[-4%] lg:right-[16%]

          2xl:w-[400px] 2xl:h-[300px] 2xl:bottom-[1%]
      `}
      />

      {/* ===== PAGAR & LANTERN  ===== */}
      <Mask
        className={`
          mask-[url('/images/pagar1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[5] bg-[hsl(48,69%,82%)]
          left-0

          lg:w-[120px] lg:h-[120px] lg:bottom-[-9%]

          xl:w-[200px] xl:h-[200px] xl:bottom-[-15%]

          2xl:w-[300px] 2xl:h-[300px] 2xl:bottom-[-14%]
      `}
      />

      <Mask
        className={`
          mask-[url('/images/pagar1.png')] absolute  mask-center mask-no-repeat [mask-size:100%] z-[4] bg-[hsl(52,69%,84%)] 
          left-[10%]
      
          lg:w-[120px] lg:h-[120px] lg:bottom-[-7%]

          xl:w-[200px] xl:h-[200px] xl:bottom-[-12%]
          
          2xl:w-[300px] 2xl:h-[300px] 2xl:bottom-[-11%]
          `}
      />

      <div
        className={`
          absolute bottom-0 left-[10%] bg-[hsl(52,69%,84%)] z-[4]
      
          lg:w-[120px] lg:h-[10px]

          xl:w-[200px] xl:h-[20px]

          2xl:w-[300px] 2xl:h-[50px]
      `}
      />

      <Mask
        className={`
          mask-[url('/images/cina1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[3] bg-[hsl(58,46%,75%)]
          left-[10%]
      
          lg:w-[80px] lg:h-[80px] lg:bottom-[3%] 

          xl:w-[150px] xl:h-[150px] xl:bottom-[5%]
          
          2xl:w-[200px] 2xl:h-[200px]
          `}
      />

      <Mask
        className={`
          mask-[url('/images/gate1.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[3] bg-[hsl(58,46%,75%)]
          bottom-[0%] left-[6%]
      
          lg:w-[40px] lg:h-[40px]

          xl:w-[80px] xl:h-[80px]
          
          2xl:w-[120px] 2xl:h-[120px]
          `}
      />

      <Mask
        className={`
          mask-[url('/images/lantern2.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[3] bg-[hsl(58,46%,75%)]
          left-[1%]
       
          lg:w-[20px] lg:h-[80px] lg:bottom-[-3%]

          xl:w-[40px] xl:h-[120px] xl:bottom-[-5%]

           2xl:w-[60px] 2xl:h-[200px]
       `}
      />

      <Mask
        className={`
          mask-[url('/images/lantern2.png')] absolute mask-center mask-no-repeat [mask-size:100%] z-[5] bg-[hsl(58,46%,75%)]
          left-[18%]
      
          lg:w-[20px] lg:h-[80px] lg:bottom-[-4%]

          xl:w-[40px] xl:h-[120px] xl:bottom-[-5%]
          
          2xl:w-[60px] 2xl:h-[200px]
          `}
      />
    </div>
  );
}
