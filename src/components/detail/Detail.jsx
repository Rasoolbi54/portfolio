import React from "react";

function Detail() {
  return (
    <div className="text-center pt-30  pb-20 px-10  md:px-0">
      <div>
        <div>
          <span className="text-2xl font-semibold md:text-2xl ">Hey, I'm Rasool bi</span>
          <div className="font-bold md:text-7xl py-1 text-5xl ">
            I build things on the web.
          </div>
          <div className="pt-3">
            <p className="text-xl ">
              Sometimes I design, sometimes I debug endlessly — but always with
              coffee and curiosity. <br />
              Welcome to my little digital playground — glad you’re here!
            </p>
          </div>

          {/* Get in Touch Button */}
          <div className="flex justify-center items-center mt-10 hover:cursor-pointer">
            <div className="text-xl bg-black text-white px-8 py-3 rounded-full gap-2">
              Get in Touch <span>→</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center items-center mt-20">
            <div className="w-8 h-15 border-3 border-gray-400 hover:border-black rounded-full flex items-start justify-center relative">
              <div className="w-1 h-1 bg-gray-400 rounded-full absolute top-1 animate-scroll"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Add custom animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateY(50px);
              opacity: 0;
            }

          }
          .animate-scroll {
            animation: scroll 3s infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Detail;
